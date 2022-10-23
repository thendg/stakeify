// SPDX-License-Identifier: MIT
pragma solidity >=0.7.3;

import "./User.sol";

contract Prize {
    address private oracle_address; // Address of the admin.

    uint256 prize_pool = 0;
    uint constant wei_value = 10**17; // Value used for our fixed point decimal numbers.
    User[] users; // Used to iterate through the mappings.
    mapping(address => User) public users_map;

    //mapping(address => uint256) public percentages;

    constructor(address initial_address) {
        oracle_address = initial_address;
    }

    event Stake(address sender, uint256 amount); // Announces that the stake was received.

    receive() external payable {} //used when message data is empty?

    /*
     * Add user address and stake amount to the stakes map.
     * If user already has staked some amount, the new stake is just added to the previous stake.
     * Update the stake percentages for each user.
     * @input user's name
     * @input user's country
     * @input user's rank
     */
    function new_stake(
        string calldata user_name,
        string calldata user_country,
        uint user_rank
    ) external payable {
        require(msg.value != 0);
        require(tx.origin != address(0));
        require(msg.value < 1);

        prize_pool += msg.value;
        if (users_map[tx.origin].rank == 0) {
            // Default values for keys are 0.
            User memory new_user = User(
                payable(tx.origin),
                user_name,
                user_country,
                msg.value,
                user_rank,
                0
            );
            users.push(new_user); // Add new user to the users array.

            new_user.user_address = payable(tx.origin);
            new_user.name = user_name;
            new_user.country = user_country;
            new_user.rank = user_rank;
            new_user.stake = msg.value;
        } else {
            users_map[tx.origin].stake += msg.value;
        }

        emit Stake(tx.origin, msg.value);

        // Update stake percentages for each user.
        for (uint256 i = 0; i < users.length; ++i) {
            uint256 amount = users[i].stake;

            uint256 percent = (amount / prize_pool) * wei_value; //convert back to wei form after division.

            users[i].percentage = percent;
        }
    }

    fallback() external payable {} // Fallback function in case msg payload is empty.

    /*
     * Returns a user's stakeed amount given a user address.
     * @input user's address.
     * @return user's stakeed amount.
     */
    function get_stakes(address user_address)
        public
        view
        returns (uint256 amount)
    {
        return users_map[user_address].stake;
    }

    function get_user(address user_address) public view returns (User memory) {
        return users_map[user_address];
    }

    /*
     * Calculates each players earnings.
     * Only to be called by admin.
     * @input address of the winning player.
     * @throws error if sender is not the admin.
     */
    function determine_earnings(address payable winner) public {
        if (msg.sender == oracle_address) {
            // Check if the sender is the admin.
            uint winner_earnings = users_map[winner].stake; // Give winner their stake back.
            uint winner_percentage = users_map[winner].percentage; // Retreive winner's percentage of other stakes.

            for (uint256 i = 0; i < users.length; ++i) {
                address payable current_user_address = users[i].user_address;
                if (current_user_address != winner) {
                    uint winners_cut = ((
                        users_map[current_user_address].stake
                    ) * winner_percentage) / wei_value;
                    winner_earnings += winners_cut; // Give the winner their proportion of everyone's stake.

                    uint user_earnings = users_map[current_user_address].stake -
                        winners_cut; // Give each user what is left of their stake.
                    deposit_using_call(current_user_address, user_earnings);
                }
            }
            deposit_using_call(winner, winner_earnings);
        } else {
            require(false, "Permission denied.");
        }
    }

    /*
     * Send data to given address.
     * Only to be called by admin.
     * @input destination address.
     * @input amount of matic to sent.
     * @throws error if sender is not the admin.
     */
    function deposit_using_call(address payable _to, uint amount)
        public
        payable
    {
        if (msg.sender == oracle_address) {
            // Check if the sender is the admin.
            bytes memory data;

            (bool sent, bytes memory _data) = _to.call{value: amount}("");
            require(sent, "Failure! Ether not sent!");

            data = _data;
        } else {
            require(false, "Permission denied.");
        }
    }
}
