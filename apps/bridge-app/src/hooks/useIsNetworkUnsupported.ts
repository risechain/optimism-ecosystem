import { useMemo } from 'react'
import { useAccount, useConfig } from 'wagmi'

// RISE TODO: Resolve the duplication from op-app.
// For now, this helps resolve the issue: `useConfig` must be used within `WagmiProvider`
export const useIsNetworkUnsupported = () => {
  const { chain } = useAccount()
  const config = useConfig()

  const isUnsupported = useMemo<boolean | undefined>(() => {
    return chain
      ? !config.chains.find((curChain) => curChain.id === chain?.id)
      : undefined
  }, [chain, config.chains])

  return { isUnsupported }
}
