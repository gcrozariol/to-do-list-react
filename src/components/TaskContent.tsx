import styles from './TaskContent.module.css'

interface TaskContentProps {
  isTaskDone: boolean
  content: string
}

export function TaskContent({ isTaskDone, content }: TaskContentProps) {
  return isTaskDone ? (
      <span className={styles.taskDone}>{content}</span>
    ) : (
      <span>{content}</span>
    )
}