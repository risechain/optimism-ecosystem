import superchainTokenlist from '@eth-optimism/tokenlist'

import type { Token } from '../types'

export const RiseTokens: [Token] = [
  // Rise Sepolia
  {
    chainId: 11155931,
    address: '0x0000000000000000000000000000000000000000',
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
    logoURI: 'https://ethereum-optimism.github.io/data/ETH/logo.svg',
    extensions: {
      // L1StandardBridgeProxy
      optimismBridgeAddress: '0xe9a531a5d7253c9823c74af155d22fe14568b610',
      opListId: 'default',
      opTokenId: 'ETH',
    },
  },
]

export const Tokenlist: Token[] = [
  ...superchainTokenlist.tokens.map((token) => token as Token),
  ...RiseTokens,
]
