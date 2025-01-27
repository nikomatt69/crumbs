export const PolymarketAbi = [ 
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "lensHub",
          "type": "address"
        },
        {
          "internalType": "contract IModuleRegistry",
          "name": "lensModuleRegistry",
          "type": "address"
        },
        {
          "internalType": "contract ICtfExchange",
          "name": "exchange",
          "type": "address"
        },
        {
          "internalType": "contract IERC20",
          "name": "collateralToken",
          "type": "address"
        },
        {
          "internalType": "contract IConditionalTokens",
          "name": "conditionalTokens",
          "type": "address"
        },
        {
          "internalType": "contract IUmaCtfAdapterV2",
          "name": "umaCtfAdapterV2",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "BinaryOutcomesInvalid",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ConditionIdDoesNotMatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MarketNotFound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotHub",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OracleMustBeProvided",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OracleNotSupported",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OrderInvalid",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OrderMustBeProvided",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OrderNotSignedByActor",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "QuestionIdMustBeProvided",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "QuestionNotFound",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "publicationActedProfileId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "publicationActedId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "questionId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "conditionId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256[2]",
          "name": "tokenIds",
          "type": "uint256[2]"
        }
      ],
      "name": "MarketRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "ModuleRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "publicationActedProfileId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "publicationActedId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "actorProfileId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "actorProfileOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "questionId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "conditionId",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "salt",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "maker",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "signer",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "taker",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "makerAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "takerAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "feeRateBps",
              "type": "uint256"
            },
            {
              "internalType": "enum Side",
              "name": "side",
              "type": "uint8"
            },
            {
              "internalType": "enum SignatureType",
              "name": "signatureType",
              "type": "uint8"
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "indexed": false,
          "internalType": "struct Order",
          "name": "order",
          "type": "tuple"
        }
      ],
      "name": "OrderVerified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "HUB",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MODULE_REGISTRY",
      "outputs": [
        {
          "internalType": "contract IModuleRegistry",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "OUTCOME_SLOT_COUNT",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCollateralToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "profileId",
          "type": "tuple"
        }
      ],
      "name": "processPublicationAction",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "registerModule",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_metadataURI",
          "type": "string"
        }
      ],
      "name": "setModuleMetadataURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceID",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    } ]
