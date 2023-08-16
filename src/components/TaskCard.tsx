import { TaskProps } from "../App";
import styles from './TaskCard.module.css'
import trash from '../assets/trash.svg'
import { Checkbox } from "./Checkbox";
import { TaskContent } from "./TaskContent";

interface TaskCardProps {
  task: TaskProps
  removeTask: (task: TaskProps) => void
  toggleCheckbox: (taskId: string) => void
}

export function TaskCard({ task, removeTask, toggleCheckbox }: TaskCardProps) {

  function handleToggleCheckbox() {
    toggleCheckbox(task.id)
  }

  function handleRemoveTask() {
    removeTask(task)
  }

  const isTaskDone = task.done
  const content = task.content

  return (
    <div className={styles.wrapper}>
      <Checkbox 
        active={isTaskDone} 
        toggleCheckbox={handleToggleCheckbox} 
      />
      <TaskContent 
        isTaskDone={isTaskDone} 
        content={content} 
      />
      <button onClick={handleRemoveTask}>
        <img src={trash} />
      </button>
    </div>
  )
}