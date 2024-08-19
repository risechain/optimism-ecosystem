import { NetworkPair, networkPairsByGroup, NetworkType } from '@eth-optimism/op-app'
import { useMemo } from 'react'

// RISE TODO: Resolve the duplication from op-app.
// For now, this helps resolve the issue: `useConfig` must be used within `WagmiProvider`

export type UseOPNetworkArgs = {
  chainId?: number
  type: NetworkType
}

export const useOPNetwork = ({ type, chainId }: UseOPNetworkArgs) => {
  const networkPair = useMemo<NetworkPair>(() => {
    const networks = networkPairsByGroup[type]

    if (chainId) {
      for (const [name, pair] of Object.entries(networks)) {
        if ([pair[0].id, pair[1].id].includes(chainId)) {
          const [l1, l2] = networks[name]
          return { l1, l2 }
        }
      }
    }

    // TODO: hacky code because we don't have any mainnet
    const network = networks.mainnet || networks.sepolia

    return { l1: network[0], l2: network[1] }
  }, [chainId, type])

  return { networkPair }
}
