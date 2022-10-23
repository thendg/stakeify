// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

struct User {
    address payable user_address;
    string name;
    string country;
    uint rank;
    uint stake;
    uint percentage;
}