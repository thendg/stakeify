// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Counter {
    address private oracle_address;   // Address of the admin.

    uint256 prize_pool = 0;
    uint constant wei_value = 10**17;   // Value used for our fixed point decimal numbers.
    address payable[] users;   // Used to iterate through the mappings.
    mapping(address => uint256) public stakes;
    mapping(address => uint256) public percentages;

    constructor(address initial_address) {
        oracle_address = initial_address;
    }

    event stake(address sender, uint256 amount); // Announces that the stake was received.

    receive() external payable{}   //used when message data is empty?

    /*
     * Add user address and stake amount to the stakes map.
     * If user already has staked some amount, the new stake is just added to the previous stake.
     * Update the stake percentages for each user.
     */
    function new_stake() external payable {
        require(msg.value != 0);
        require(tx.origin != address(0));

        prize_pool += msg.value;
        if (stakes[tx.origin] == 0) {   // Default values for keys are 0.
            users.push(payable(tx.origin));   // Add new user to the users array.
            stakes[tx.origin] = msg.value;
        } else {
            stakes[tx.origin] = stakes[tx.origin] + msg.value;
        }

        emit stake(tx.origin, msg.value);
        
        // Update stake percentages for each user.
        for (uint256 i = 0; i < users.length; ++i) {
            address user_address = users[i];

            uint256 amount = stakes[user_address];

            uint256 percent = (amount / prize_pool)*wei_value;   //convert back to wei form after division.

            percentages[user_address] = percent;
        }
    }

    fallback() external payable {}   // Fallback function in case msg payload is empty.

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
        return stakes[user_address];
    }

    /*
    * Calculates each players earnings.
    * Only to be called by admin.
    * @input address of the winning player.
    * @throws error if sender is not the admin.
    */
    function determine_earnings(address payable winner) public {
        if(msg.sender == oracle_address){   // Check if the sender is the admin.
            uint winner_earnings = stakes[winner];   // Give winner their stake back.
            uint winner_percentage = percentages[winner];   // Retreive winner's percentage of other stakes.

            for (uint256 i = 0; i < users.length; ++i) {
                address payable user_address = users[i];
                if(user_address != winner){
                    uint winners_cut = (stakes[user_address]*winner_percentage)/wei_value;
                    winner_earnings += winners_cut;   // Give the winner their proportion of everyone's stake.

                    uint user_earnings = stakes[user_address] - winners_cut;   // Give each user what is left of their stake.
                    deposit_using_call(user_address, user_earnings);
                }
            }
            deposit_using_call(winner, winner_earnings);
        } else {
            require(false, "Permission denied.");
        }
    }

    /*z
    * Send data to given address.
    * Only to be called by admin.
    * @input destination address.
    * @input amount of matic to sent.
    * @throws error if sender is not the admin.
    */
    function deposit_using_call(address payable _to, uint amount) public payable{
        if(msg.sender == oracle_address){   // Check if the sender is the admin.
            bytes memory data;

            (bool sent, bytes memory _data) = _to.call{value: amount}("");
            require(sent, "Failure! Ether not sent!");

            data = _data;
        } else {
            require(false, "Permission denied.");
        }
    }
}
