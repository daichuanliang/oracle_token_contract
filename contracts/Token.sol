pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("Pendle", "PENDLE") {
        _mint(msg.sender, 100000000000 * 10 ** decimals());
    }

    function decimals() override public pure returns (uint8) {
        return 18;
    }
}


// // SPDX-License-Identifier: GPL-3.0

// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// contract Token is ERC20 {
// 		uint8 _decimals;
//     constructor(
//         uint256 initialSupply,
//         string memory tokenName,
//         string memory tokenSymbol
//     ) ERC20(tokenName, tokenSymbol) {
// 				_decimals = 6;
//         // _mint(msg.sender, initialSupply);
// 				_mint(msg.sender, initialSupply ** decimals());

//     }
// 		function decimals() override public pure returns (uint8) {
//         return 6;
//     }
// }