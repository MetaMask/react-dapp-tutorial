import { useMetaMask } from '@/hooks/useMetaMask'
import styles from './Display.module.css'
import { formatChainAsNum } from '@/utils'

export const Display = () => {

  const { wallet } = useMetaMask()

  return (
    <div className={styles.display}>
      {wallet.accounts.length > 0 &&
        <>
          <div>Wallet Accounts: {wallet.accounts[0]}</div>
          <div>Wallet Balance: {wallet.balance}</div>
          <div>Hex ChainId: {wallet.chainId}</div>
          <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>
        </>
      }
    </div>
  )
}