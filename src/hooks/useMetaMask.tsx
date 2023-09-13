// This will be replaced with content from the tutorial
import { useState, createContext, useEffect, PropsWithChildren, useContext, useCallback } from "react";

import detectEthereumProvider from "@metamask/detect-provider";
import { formatBalance } from "~/utils";

interface WalletState {
  accounts: any[]
  balance: string
  chainId: string
}

interface MetaMaskContextData {
  wallet: WalletState
  hasProvider: boolean | null
  error: boolean
  errorMessage: string
  isConnecting: boolean
  connectMetaMask: () => void
  clearError: () => void
}

const disconnectedState: WalletState = { accounts: [], balance: '', chainId: ''}

const MetaMaskContext = createContext<MetaMaskContextData>({} as MetaMaskContextData)

export const MetaMaskContextProvider = ({ children}: PropsWithChildren) => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);

  const [isConnecting, setIsConnecting] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const clearError = () => setErrorMessage('')

  const [wallet, setWallet] = useState(disconnectedState)

  //
  // const _updateWallet = useCallback(async (provid))
  // 
  ///
  
}