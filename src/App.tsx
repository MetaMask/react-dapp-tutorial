import './App.global.css'
import styles from './App.module.css'

import { Navigation } from './components/Navigation'
import { Display } from './components/Display'
import { MetaMaskError } from './components/MetaMaskError'

export const App = () => {

  return (
    <div className={styles.appContainer}>
      <Navigation />
      <Display />
      <MetaMaskError />
    </div>
  )
}