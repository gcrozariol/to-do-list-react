import { TaskProps } from '../App'
import styles from './Metrics.module.css'

interface MetricsProps {
  tasks: TaskProps[]
}

export function Metrics({ tasks }: MetricsProps) {
  const numberOfTotalTasks = tasks.length
  const numberOfFinishedTasks = tasks.filter(task => task.done === true).length
  
  return (
    <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.createdText}>Created</span>
          <span className={styles.totalNumber}>{numberOfTotalTasks}</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.doneText}>Done</span>
          <span className={styles.totalNumber}>{numberOfFinishedTasks} of {numberOfTotalTasks}</span>
        </div>
      </div>
  )
}