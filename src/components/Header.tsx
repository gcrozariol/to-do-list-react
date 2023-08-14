import logo from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <span className={styles.toText}>to</span>
      <span className={styles.doText}>do</span>
    </div>
  )
}