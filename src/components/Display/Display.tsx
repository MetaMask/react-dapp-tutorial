// import { useMetaMask } from '~/hooks/useMetaMask'
import { useSDK } from '@metamask/sdk-react-ui'
import styles from './Display.module.css'
import { formatChainAsNum } from '~/utils'

export const Display = () => {

  // const { wallet } = useMetaMask()
  const { account, connected, provider } = useSDK()

  return (
    <div className={styles.display}>
      {connected &&
        <>
          <div>Wallet Accounts: {account}</div>
          {provider && provider.chainId &&
            <>
              <div>Hex ChainId: {provider?.chainId}</div>
              <div>Numeric ChainId: {formatChainAsNum(provider?.chainId)}</div>
            </>
          }
        </>
      }
    </div>
  )
}