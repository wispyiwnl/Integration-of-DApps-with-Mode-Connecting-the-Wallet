// config/index.tsx

import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, sepolia, mode, modeTestnet } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = '6e285063ffc44cfa2d383f9031572e7d'

if (!projectId) {
    throw new Error('Project ID is not defined')
}

export const networks = [mainnet, sepolia, mode, modeTestnet]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }),
    ssr: true,
    projectId,
    networks
})

export const config = wagmiAdapter.wagmiConfig