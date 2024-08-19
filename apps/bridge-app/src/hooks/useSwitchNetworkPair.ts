import { NetworkDirection, NetworkPair } from '@eth-optimism/op-app'
import { useCallback } from 'react'
import { useSwitchChain } from 'wagmi'
import type { SwitchChainErrorType } from 'wagmi/actions'

// RISE TODO: Resolve the duplication from op-app.
// For now, this helps resolve the issue: `useConfig` must be used within `WagmiProvider`

export type UseSwitchNetworkPairArgs = {
  networkPair: NetworkPair
  direction: NetworkDirection
}

export type UseSwitchNetworkPairReturnType = (
  args: UseSwitchNetworkPairArgs,
) => {
  error: SwitchChainErrorType | null
  isLoading: boolean
  switchNetworkPair: () => void
}

export const useSwitchNetworkDirection: UseSwitchNetworkPairReturnType = ({
  networkPair,
  direction,
}: UseSwitchNetworkPairArgs) => {
  const { error, status, switchChain } = useSwitchChain()

  const switchNetworkPair = useCallback(() => {
    const { l1, l2 } = networkPair
    switchChain?.({ chainId: direction === 'l1' ? l1.id : l2.id })
  }, [direction, networkPair, switchChain])

  return {
    error,
    isLoading: status === 'pending',
    switchNetworkPair,
  }
}
