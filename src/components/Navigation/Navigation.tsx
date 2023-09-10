// import { useMetaMask } from '~/hooks/useMetaMask'
import { MetaMaskButton } from '@metamask/sdk-react-ui'
// import { formatAddress } from '~/utils'
import styles from './Navigation.module.css'

export const Navigation = () => {

  // const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask()

  return (
    <div className={styles.navigation}>
      <div className={styles.flexContainer}>
        <div className={styles.leftNav}>Vite + React & MetaMask</div>
        <div className={styles.rightNav}>
          <MetaMaskButton theme={'light'} color="white"></MetaMaskButton>
        </div>
      </div>
    </div>
  )
}