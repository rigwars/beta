 abi  =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "BuyUpgrade",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "minerAddr",
				"type": "address"
			}
		],
		"name": "GetProductionPerSecond",
		"outputs": [
			{
				"name": "personalProduction",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundICO",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "WithdrawPotShare",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "miner",
				"type": "address"
			}
		],
		"name": "GetMinerUnclaimedICOShare",
		"outputs": [
			{
				"name": "unclaimedPot",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetGlobalProduction",
		"outputs": [
			{
				"name": "globalMoney",
				"type": "uint256"
			},
			{
				"name": "globalHashRate",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "GetPVPData",
		"outputs": [
			{
				"name": "attackpower",
				"type": "uint256"
			},
			{
				"name": "defensepower",
				"type": "uint256"
			},
			{
				"name": "immunityTime",
				"type": "uint256"
			},
			{
				"name": "exhaustTime",
				"type": "uint256"
			},
			{
				"name": "troops",
				"type": "uint256[6]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetPotInfo",
		"outputs": [
			{
				"name": "_honeyPotAmount",
				"type": "uint256"
			},
			{
				"name": "_devFunds",
				"type": "uint256"
			},
			{
				"name": "_jackPot",
				"type": "uint256"
			},
			{
				"name": "_nextDistributionTime",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "WithdrawDevFunds",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetTotalMinerCount",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetCurrentICOCycle",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "HasBooster",
		"outputs": [
			{
				"name": "hasBoost",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "rigIdx",
				"type": "uint8"
			},
			{
				"name": "count",
				"type": "uint16"
			}
		],
		"name": "UpgradeRig",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "miner",
				"type": "address"
			},
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "GetMinerICOData",
		"outputs": [
			{
				"name": "ICOFund",
				"type": "uint256"
			},
			{
				"name": "ICOShare",
				"type": "uint256"
			},
			{
				"name": "lastClaimIndex",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			},
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "BuyTroop",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "rigIdx",
				"type": "uint8"
			},
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"name": "UpgradeRigETH",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "defenderAddr",
				"type": "address"
			}
		],
		"name": "Attack",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetBoosterData",
		"outputs": [
			{
				"name": "_boosterHolders",
				"type": "address[5]"
			},
			{
				"name": "currentPrice",
				"type": "uint256"
			},
			{
				"name": "currentIndex",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "GetICOData",
		"outputs": [
			{
				"name": "ICOFund",
				"type": "uint256"
			},
			{
				"name": "ICOPot",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "minerAddr",
				"type": "address"
			}
		],
		"name": "GetMinerData",
		"outputs": [
			{
				"name": "money",
				"type": "uint256"
			},
			{
				"name": "lastupdate",
				"type": "uint256"
			},
			{
				"name": "prodPerSec",
				"type": "uint256"
			},
			{
				"name": "rigs",
				"type": "uint256[9]"
			},
			{
				"name": "upgrades",
				"type": "uint256[3]"
			},
			{
				"name": "unclaimedPot",
				"type": "uint256"
			},
			{
				"name": "hasBooster",
				"type": "bool"
			},
			{
				"name": "unconfirmedMoney",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "idx",
				"type": "uint256"
			}
		],
		"name": "GetMinerAt",
		"outputs": [
			{
				"name": "minerAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "WithdrawICOEarnings",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "ReleaseICO",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "StartNewMiner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "BuyBooster",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	}
];