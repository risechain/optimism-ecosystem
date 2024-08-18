import superchainTokenlist from '@eth-optimism/tokenlist'

import type { Token } from "../types";


export const RiseTokens: [Token] = [
  // Rise Sepolia
  {
    chainId: 11155930,
    address: "0x0000000000000000000000000000000000000000",
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    logoURI: "https://ethereum-optimism.github.io/data/ETH/logo.svg",
    extensions: {
      // L1StandardBridgeProxy
      optimismBridgeAddress: "0x1e4452C8Cfd7Bfa4Bd9D9c16E3BBd9d5ca0B57cb",
      opListId: "default",
      opTokenId: "ETH"
    }
  }
];

export const Tokenlist: Token[] = [
  ...superchainTokenlist.tokens.map((token) => token as Token),
  ...RiseTokens,
]
