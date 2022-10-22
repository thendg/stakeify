# PRIZE Protocol
> *The staking mechanism for prize staking.*

## `new_stake`
Add user address and stake amount to the stakes map.
If user already has staked some amount, the new stake is just added to the previous stake.
Update the stake percentages for each user.

## `fallback`
Triggered only if a block is sent with an empty payload.

## `get_stake`
Returns a user's stakeed amount given a user address.
@input user's address.
@return user's stakeed amount.

## `determine_earnings`
Calculates each players earnings.
Only to be called by admin.
@input address of the winning player.
@throws error if sender is not the admin.

## `deposit_using_call`
Send data to given address.
Only to be called by admin.
@input destination address.
@input amount of matic to sent.
@throws error if sender is not the admin.