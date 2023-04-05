export default {
  137: [
    {
      name: "polygon",
      chainId: "137",
      contracts: {
        LSD: {
          address: "0xC792B805c14a4BfD776592AC63e6068b54299f27",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "_leverageStakingYieldToggle",
                  type: "bool",
                },
                {
                  internalType: "uint8",
                  name: "_borrowPercentage",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "_stader",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_aave",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_aaveRewards",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_balancer",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceFeedMatic",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceFeedMaticX",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_wMatic",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_maticX",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_aPolMATICX",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "_balancerPool",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "updatedPercentage",
                  type: "uint8",
                },
              ],
              name: "BorrowPercentageChange",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "bool",
                  name: "toggleStatus",
                  type: "bool",
                },
              ],
              name: "LeverageStakingYieldToggle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              name: "Withdraw",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "asset",
              outputs: [
                {
                  internalType: "address",
                  name: "assetTokenAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "borrowPercentage",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_assets",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
              ],
              name: "claimAaveRewards",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
              ],
              name: "convertToAssets",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
              ],
              name: "convertToShares",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "deployTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "deposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "disbaleLeverageStakingYield",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "enableLeverageStakingYield",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAaveUserAccountData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "totalCollateralBase",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalDebtBase",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "availableBorrowsBase",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "currentLiquidationThreshold",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "ltv",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "healthFactor",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getPriceFeedMaticX",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundID",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "price",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timeStamp",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getPriceFeedWMatic",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundID",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "price",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timeStamp",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "leverageStakingYieldToggle",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "maxDeposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "maxAssets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "maxMint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "maxShares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "maxRedeem",
              outputs: [
                {
                  internalType: "uint256",
                  name: "maxShares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "maxWithdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "maxAssets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "mint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
              ],
              name: "previewDeposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
              ],
              name: "previewMint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
              ],
              name: "previewRedeem",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
              ],
              name: "previewWithdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "redeem",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "resetApprovals",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_borrowPercentage",
                  type: "uint8",
                },
              ],
              name: "setBorrowPercentage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalAssets",
              outputs: [
                {
                  internalType: "uint256",
                  name: "totalManagedAssets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalInvested",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "withdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        LSDWrapper: {
          address: "0xA9bFfeCa653Dac018280107e3C8021568b98B841",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_lsd",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_wMatic",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              name: "Withdraw",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "deposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "depositGateway",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "mintGateway",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "redeem",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "redeemGateway",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "resetApprovals",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "withdrawGateway",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        WMATIC: {
          address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
          abi: [
            {
              constant: true,
              inputs: [],
              name: "name",
              outputs: [{ name: "", type: "string" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "guy", type: "address" },
                { name: "wad", type: "uint256" },
              ],
              name: "approve",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "totalSupply",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "src", type: "address" },
                { name: "dst", type: "address" },
                { name: "wad", type: "uint256" },
              ],
              name: "transferFrom",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [{ name: "wad", type: "uint256" }],
              name: "withdraw",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "decimals",
              outputs: [{ name: "", type: "uint8" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "", type: "address" }],
              name: "balanceOf",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "symbol",
              outputs: [{ name: "", type: "string" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "dst", type: "address" },
                { name: "wad", type: "uint256" },
              ],
              name: "transfer",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "deposit",
              outputs: [],
              payable: true,
              stateMutability: "payable",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                { name: "", type: "address" },
                { name: "", type: "address" },
              ],
              name: "allowance",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            { payable: true, stateMutability: "payable", type: "fallback" },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "src", type: "address" },
                { indexed: true, name: "guy", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "src", type: "address" },
                { indexed: true, name: "dst", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "dst", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "src", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Withdrawal",
              type: "event",
            },
          ],
        },
      },
    },
  ],
  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        LSD: {
          address: "0xC792B805c14a4BfD776592AC63e6068b54299f27",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "_leverageStakingYieldToggle",
                  type: "bool",
                },
                {
                  internalType: "uint8",
                  name: "_borrowPercentage",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "_stader",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_aave",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_aaveRewards",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_balancer",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceFeedMatic",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceFeedMaticX",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_wMatic",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_maticX",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_aPolMATICX",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "_balancerPool",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "updatedPercentage",
                  type: "uint8",
                },
              ],
              name: "BorrowPercentageChange",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "bool",
                  name: "toggleStatus",
                  type: "bool",
                },
              ],
              name: "LeverageStakingYieldToggle",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              name: "Withdraw",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "asset",
              outputs: [
                {
                  internalType: "address",
                  name: "assetTokenAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "borrowPercentage",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_assets",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
              ],
              name: "claimAaveRewards",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
              ],
              name: "convertToAssets",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
              ],
              name: "convertToShares",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "deployTime",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "deposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "disbaleLeverageStakingYield",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "enableLeverageStakingYield",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAaveUserAccountData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "totalCollateralBase",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalDebtBase",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "availableBorrowsBase",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "currentLiquidationThreshold",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "ltv",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "healthFactor",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getPriceFeedMaticX",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundID",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "price",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timeStamp",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getPriceFeedWMatic",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundID",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "price",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timeStamp",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "leverageStakingYieldToggle",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "maxDeposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "maxAssets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "maxMint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "maxShares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "maxRedeem",
              outputs: [
                {
                  internalType: "uint256",
                  name: "maxShares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "maxWithdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "maxAssets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "mint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
              ],
              name: "previewDeposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
              ],
              name: "previewMint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
              ],
              name: "previewRedeem",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
              ],
              name: "previewWithdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "redeem",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "resetApprovals",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_borrowPercentage",
                  type: "uint8",
                },
              ],
              name: "setBorrowPercentage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalAssets",
              outputs: [
                {
                  internalType: "uint256",
                  name: "totalManagedAssets",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalInvested",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "withdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        LSDWrapper: {
          address: "0xA9bFfeCa653Dac018280107e3C8021568b98B841",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_lsd",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_wMatic",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              name: "Withdraw",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "deposit",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "depositGateway",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "mintGateway",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "redeem",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_shares",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "redeemGateway",
              outputs: [
                {
                  internalType: "uint256",
                  name: "assets",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "resetApprovals",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_assets",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_limit",
                  type: "uint256",
                },
              ],
              name: "withdrawGateway",
              outputs: [
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        WMATIC: {
          address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
          abi: [
            {
              constant: true,
              inputs: [],
              name: "name",
              outputs: [{ name: "", type: "string" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "guy", type: "address" },
                { name: "wad", type: "uint256" },
              ],
              name: "approve",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "totalSupply",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "src", type: "address" },
                { name: "dst", type: "address" },
                { name: "wad", type: "uint256" },
              ],
              name: "transferFrom",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [{ name: "wad", type: "uint256" }],
              name: "withdraw",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "decimals",
              outputs: [{ name: "", type: "uint8" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ name: "", type: "address" }],
              name: "balanceOf",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "symbol",
              outputs: [{ name: "", type: "string" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { name: "dst", type: "address" },
                { name: "wad", type: "uint256" },
              ],
              name: "transfer",
              outputs: [{ name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "deposit",
              outputs: [],
              payable: true,
              stateMutability: "payable",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                { name: "", type: "address" },
                { name: "", type: "address" },
              ],
              name: "allowance",
              outputs: [{ name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            { payable: true, stateMutability: "payable", type: "fallback" },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "src", type: "address" },
                { indexed: true, name: "guy", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "src", type: "address" },
                { indexed: true, name: "dst", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "dst", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Deposit",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, name: "src", type: "address" },
                { indexed: false, name: "wad", type: "uint256" },
              ],
              name: "Withdrawal",
              type: "event",
            },
          ],
        },
      },
    },
  ],
} as const;
