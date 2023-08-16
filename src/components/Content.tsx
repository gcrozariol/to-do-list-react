import { TaskProps } from '../App'
import { EmptyTaskList } from './EmptyTaskList'
import styles from './Content.module.css'
import { TaskList } from './TaskList'
import { Metrics } from './Metrics'

interface Content {
  tasks: TaskProps[]
  removeTask: (task: TaskProps) => void
  toggleCheckbox: (taskId: string) => void
}

export function Content({ tasks, removeTask, toggleCheckbox }: Content) {
  const isListOfTasksEmpty = tasks.length === 0

  function handleRemoveTask(task: TaskProps) {
    removeTask(task)
  }

  function handleToggleCheckbox(taskId: string) {
    toggleCheckbox(taskId)
  }

  return (
    <div className={styles.container}>
      <Metrics tasks={tasks} />
      {isListOfTasksEmpty ? 
        <EmptyTaskList /> : 
        <TaskList 
          tasks={tasks} 
          removeTask={handleRemoveTask} 
          toggleCheckbox={handleToggleCheckbox} 
        />
      }
    </div>
  )
}