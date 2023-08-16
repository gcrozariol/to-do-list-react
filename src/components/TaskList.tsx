import { TaskProps } from "../App";
import { TaskCard } from "./TaskCard";
import styles from './TaskList.module.css'

interface TaskListProps {
  tasks: TaskProps[]
  removeTask: (task: TaskProps) => void
  toggleCheckbox: (taskId: string) => void
}

export function TaskList({ tasks, removeTask, toggleCheckbox }: TaskListProps) {

  function handleRemoveTask(task: TaskProps) {
    removeTask(task)
  }

  function handleToggleCheckbox(taskId: string) {
    toggleCheckbox(taskId)
  }

  return (
    <div className={styles.wrapper}>
      {tasks.map(task =>
        <div id={task.id} className={styles.task}>
          <TaskCard 
            task={task}
            removeTask={handleRemoveTask}
            toggleCheckbox={handleToggleCheckbox}
          />
        </div>
      )}
    </div>
  )
}