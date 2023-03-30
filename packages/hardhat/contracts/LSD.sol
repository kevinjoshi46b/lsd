//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC4626.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

import "./customInterfaces/stader/IChildPool.sol";
import "./customInterfaces/aave/IPool.sol";
import "./customInterfaces/aave/IRewardsController.sol";
import "./customInterfaces/balancer/IVault.sol";
import "./customInterfaces/wmatic/WMATIC.sol";

contract LSD is ERC20, IERC4626, Ownable {}
