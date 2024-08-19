import { predeploys } from '@eth-optimism/contracts-ts'
import { deploymentAddresses, NetworkType, OpConfig } from '@eth-optimism/op-app'
import { useMemo } from 'react'
import { useConfig } from 'wagmi'
import { useOPNetwork } from '@/hooks/useOPNetwork'

// RISE TODO: Resolve the duplication from op-app.
// For now, this helps resolve the issue: `useConfig` must be used within `WagmiProvider`

export type UseOPWagmiConfigArgs = {
  type: NetworkType
  chainId?: number
}

export const useOPWagmiConfig = ({ type, chainId }: UseOPWagmiConfigArgs) => {
  const config = useConfig()
  const { networkPair } = useOPNetwork({ type, chainId })

  const opConfig = useMemo<OpConfig | undefined>(() => {
    if (!networkPair) {
      return
    }

    const { l1, l2 } = networkPair
    const deploymentAddress = deploymentAddresses[l2.id]

    return {
      ...config,
      l2chains: {
        [l2.id]: {
          chainId: l2.id,
          l1ChainId: l1.id,
          l1Addresses: {
            portal: {
              address: deploymentAddress.OptimismPortalProxy,
              chainId: l1.id,
            },
            l2OutputOracle: {
              address: deploymentAddress.L2OutputOracleProxy,
              chainId: l1.id,
            },
            l1StandardBridge: {
              address: deploymentAddress.L1StandardBridgeProxy,
              chainId: l1.id,
            },
            l1CrossDomainMessenger: {
              address: deploymentAddress.L1CrossDomainMessengerProxy,
              chainId: l1.id,
            },
            l1Erc721Bridge: {
              address: deploymentAddress.L1ERC721BridgeProxy,
              chainId: l1.id,
            },
          },
          l2Addresses: {
            l2L1MessagePasserAddress: {
              address: predeploys.L2ToL1MessagePasser.address,
              chainId: l2.id,
            },
            l2StandardBridge: {
              address: predeploys.L2StandardBridge.address,
              chainId: l2.id,
            },
          },
        },
      },
    } as OpConfig
  }, [config, networkPair])

  return { opConfig }
}
