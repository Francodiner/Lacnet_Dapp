// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string private greeting;
    address private owner;

    event GreetingChanged(string newGreeting);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }
    
    constructor() {
        greeting = "Hello, World!";
        owner = msg.sender;
    }

    function sayHello() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public onlyOwner {
        greeting = _greeting;
        emit GreetingChanged(_greeting);
    }

    function setGreetingWithName(string memory _name) public {
        string memory newGreeting = string(abi.encodePacked("Hello, ", _name, "!"));
        greeting = newGreeting;
        emit GreetingChanged(newGreeting);
    }
}