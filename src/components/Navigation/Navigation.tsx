import styles from "./Navigation.module.css"

export const Navigation = () => {

  return (
    <div className={styles.navigation}>
      <div className={styles.flexContainer}>
        <div className={styles.leftNav}>Vite + React & MetaMask</div>
        <div className={styles.rightNav}>
          Connect MetaMask
        </div>
      </div>
    </div>
  )
}