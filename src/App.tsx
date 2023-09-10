import './App.global.css'
import styles from './App.module.css'

import { Navigation } from './components/Navigation'
import { Display } from './components/Display'
import { MetaMaskError } from './components/MetaMaskError'
// import { MetaMaskContextProvider } from './hooks/useMetaMask'
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui'

export const App = () => {

  return (
    <MetaMaskUIProvider sdkOptions={{
      logging: {
        developerMode: false,
      },
      checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
      dappMetadata: {
        name: 'Demo React App',
        url: window.location.host,
      },
    }}>
      <div className={styles.appContainer}>
        <Navigation />
        <Display />
        <MetaMaskError />
      </div>
    </MetaMaskUIProvider>
  )
}