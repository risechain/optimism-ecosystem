// import tokenlist from '@eth-optimism/tokenlist'
import { useMemo } from 'react'

import { Tokenlist } from '../configs'
import type { Token } from '../types'

export type UseOPTokenArgs = {
  chainId?: number
}

export const useOPTokens = ({ chainId }: UseOPTokenArgs) => {
  const tokens = useMemo<Token[]>(() => {
    if (!chainId) {
      alert(Tokenlist)
      return Tokenlist as Token[]
    }
    return Tokenlist.filter(
      (token) => token.chainId === chainId,
    ) as Token[]
  }, [chainId])

  const ethToken = useMemo<Token>(() => {
    return tokens.filter((token) => token.symbol.toLowerCase() === 'eth')[0]
  }, [tokens])

  const erc20Tokens = useMemo<Token[]>(() => {
    return tokens.filter((token) => token.symbol.toLowerCase() !== 'eth')
  }, [tokens])

  return {
    ethToken,
    erc20Tokens,
  }
}
