import { useState } from 'react'

import { Header } from './components/Header'
import { CreateTaskForm } from './components/CreateTaskForm'
import { Content } from './components/Content'
import styles from './App.module.css'

export interface TaskProps {
  id: string
  content: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function handleCreateTask(task: TaskProps) {
    setTasks(tasks => [...tasks, task])
  }

  function handleRemoveTask(task: TaskProps) {
    setTasks(tasks => tasks.filter(taskItem => taskItem != task))
  }

  function handleToggleCheckbox(taskId: string) {
    const updatedTasks = tasks.map(obj => {
      if (obj.id === taskId) {
        return {
          ...obj, 
          done: !obj.done
        }
      }
      return obj
    })

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CreateTaskForm createTask={handleCreateTask} />
        <Content 
          tasks={tasks}
          removeTask={handleRemoveTask}
          toggleCheckbox={handleToggleCheckbox}
        />
      </div>
    </>
  )
}

export default App
