---
title: Function Modifiers in Solidity
date: "2022-09-24T22:40:32.169Z"
featuredImage: "./featured-image.jpg"
type: post
description: All about function modifiers in Solidity.
published: true
altText: Photo by Javier Allegue Barros on Unsplash
  
---

If you are familiar with Solidity, you may have noticed or come across code like:
```sol
pragma solidity ^0.7.0;

contract TestContract {
    uint private score;

    function getScore() external view returns(uint){
        return score;
    }
}
```

The `view` key in the `getScore` function above is an example of Modifiers in Solidity.

Modifiers in Solidity are little helper functions that _modify_ a function that it is attached to. Modifiers are called before the main function is called and we may need this behavior in cases like:
- Validating an input.
- Making checks before modifying the contract.
- Running a set of tasks or functions before running the main one.

There are built-in modifiers in Solidity and we can as well create our own custom modifiers.

### Built-in Modifiers
The `view` example above is an example of the built-ins. There exist other examples like `pure` and `payable`.

##### `view`
This modifier is used to explicitly inform Solidity that you intend to only read the state from the contract. You are not allowed to modify or alter any state variable using a function containing this modifier. Attempting to do this will lead to an error and cancel the code execution.

For example, using the sample code above, we are not allowed to do this:
```sol
function getScore() external view returns(uint){
    score += 1; // TypeError: Function declared as view, but this expression (potentially) modifies the state
    return score;
}
 ```
<br>

##### `pure`
This modifier is used to inform Solidity that we have no intention of reading or modifying the contract state. In `view`, we can read but cannot set/alter state, while in `pure` we cannot even read the state. For, example:
```sol
function getScore() external pure returns(uint){
    return score; // TypeError: Function declared as pure, but this expression (potentially) reads from the environment or state and thus requires "view".
}
 ```

You may think, _"When do we need this then?"_. We may need this modifier when we wish to make some internal calculations and checks where we do not need any variables from the existing state. For example,
```solidity
pragma solidity ^0.7.0;

contract TestContract {
    uint private scoreA;
    uint private scoreB;

    function addScores(uint a, uint b) internal pure returns (uint) {
        return a * b;
    }

    function addAndGetScores() external view returns (uint) {
        return addScores(scoreA, scoreB);
    }
}
```
Above, `addScores` accepts arguments and only carries out instructions based on them. They do not read state or change it.

##### `payable`
This other modifier is used to inform Solidity that we expect some ether in form of Wei to be passed in along with the function. It is simply called as such:
```solidity
pragma solidity ^0.7.0;

contract TestContract {
    uint private score;

    function setScore(uint newScore) external payable {
        score = newScore;
    }
}
```
When we do this without sending in some ether with the transaction, the function execution will fail.

### Custom Modifiers
We may also decide to create our own custom modifiers that handle specific tasks before executing our functions. To do this, we simply define the modifier using the `modifier` keyword and can also use them alongside other modifiers:
```sol
pragma solidity ^0.7.0;

contract TestContract {
    uint private score;
    address manager;

    constructor() {
        manager = msg.sender;
    }

    modifier isManager() {
        require(msg.sender == manager);
        _;
    }

    function setScore(uint newScore) external payable isManager {
        score = newScore;
    }
}
```
Let us break down the contract code above:
- We added a new variable to store our manager, which in this case is the address of the wallet or contract that deploys this `TestContract`.
- We set this manager in the constructor.
- The next line is where we declare our modifier called `isManager` which just checks that the caller of the function it is attached to is the manager. This adds some layer of protection on top of our contract by preventing the general public or unintended users to modify the state of our contract.

The modifier function above has a line of code with just an underscore "_". This special symbol informs Solidity that this is the point where we inject the main function block. So it checks that the caller is the manager, and then runs `score = newScore;`

Also, note that modifiers can also accept arguments like regular functions.
```sol
pragma solidity ^0.7.0;

contract TestContract {
    uint private score;
    address manager;

    constructor() {
        manager = msg.sender;
    }

    modifier checkFee(uint fee) {
        require(fee > 100000);
        _;
    }

    function setScore(uint newScore) external payable checkFee(msg.value) {
        score = newScore;
    }
}
```

In the code above, the new `checkFee` modifier expects to be called with a value that it checks to be greater than 100000wei. This modifier is now used in `setScore` and the value of ether sent with the transaction is passed as the parameter.
