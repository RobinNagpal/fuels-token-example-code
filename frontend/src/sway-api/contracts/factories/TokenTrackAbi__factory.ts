/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.82.0
  Forc version: 0.49.3
  Fuel-Core version: 0.22.1
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { TokenTrackAbi, TokenTrackAbiInterface } from "../TokenTrackAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 5,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "str",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "target",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "burn",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "recipient",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "mint",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "addr",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "read_addr_balance",
      "output": {
        "name": "",
        "type": 6,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "addr",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "read_contract_balance",
      "output": {
        "name": "",
        "type": 6,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "coins",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "from",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "target",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "transfer_coins_to_address",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "coins",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "from",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "target",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "transfer_coins_to_contract",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": null
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "de9090cb50e71c2588c773487d1da7066d0c719849a7e58dc8b6397a25c567c0",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class TokenTrackAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): TokenTrackAbiInterface {
    return new Interface(_abi) as unknown as TokenTrackAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): TokenTrackAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as TokenTrackAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<TokenTrackAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = TokenTrackAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as TokenTrackAbi;
  }
}
