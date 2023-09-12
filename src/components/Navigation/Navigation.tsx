import { formatAddress } from '~/utils'
import styles from './Navigation.module.css'

/* ADDED */
import { useState } from 'react'
import { useSDK } from '@metamask/sdk-react'

export const Navigation = () => {

  const [account, setAccount] = useState<string>()
  const { sdk, connected, connecting } = useSDK()

  const connect = async () => {
    try {
      const accounts = await sdk?.connect()
      setAccount(accounts?.[0])
    } catch (err) {
      console.warn(`failed to connect..`, err)
    }
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.flexContainer}>
        <div className={styles.leftNav}>Vite + React & MetaMask</div>
        <div className={styles.rightNav}>
          {/* {!hasProvider &&
            <a href="https://metamask.io" target="_blank" rel="noreferrer">
              Install MetaMask
            </a>
          }
          {window.ethereum?.isMetaMask && wallet.accounts.length < 1 &&
            <button disabled={isConnecting} onClick={connectMetaMask}>
              Connect MetaMask
            </button>
          }
          {hasProvider && wallet.accounts.length > 0 &&
            <a
              className="text_link tooltip-bottom"
              href={`https://etherscan.io/address/${wallet}`}
              target="_blank"
              data-tooltip="Open in Block Explorer" rel="noreferrer"
            >
              {formatAddress(wallet.accounts[0])}
            </a>
          } */}

          {connected
            ? <a
              className="text_link tooltip-bottom"
              href={`https://etherscan.io/address/${account}`}
              target="_blank"
              data-tooltip="Open in Block Explorer" rel="noreferrer"
            >
              {formatAddress(account)}
            </a>
            : <button className="myui" disabled={connecting} onClick={connect}>
              Connect MetaMask
            </button>
          }
        </div>
      </div>
    </div>
  )
}