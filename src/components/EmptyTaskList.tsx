import clipboard from '../assets/clipboard.svg'
import styles from './EmptyTaskList.module.css'

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={clipboard} />
      <span className={styles.primaryMessage}>You don't have any tasks yet.</span>
      <span className={styles.secondaryMessage}>Add tasks and organize your to-do items.</span>
    </div>
  )
}