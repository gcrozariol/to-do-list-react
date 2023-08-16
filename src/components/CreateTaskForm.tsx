import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 } from 'uuid'

import { TaskProps } from '../App'

import plusIcon from '../assets/plus.svg'
import styles from './CreateTaskForm.module.css'

interface NewTask {
  createTask: (task: TaskProps) => void
}

export function CreateTaskForm({ createTask }: NewTask) {
  const [taskContent, setTaskContent] = useState('')

  const isNewTaskEmpty = taskContent.length === 0

  function handleCreateTask(e: FormEvent) {
    e.preventDefault()

    const task = {
      id: v4(),
      content: taskContent,
      done: false,
    }

    createTask(task)
    setTaskContent('')
  } 

  function handleSetTaskContent(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    setTaskContent(e.target.value)
  }

  return (
    <form className={styles.search} onSubmit={handleCreateTask}>
      <input value={taskContent} placeholder='Add new task' onChange={handleSetTaskContent} />
      <button disabled={isNewTaskEmpty}>
        <span>Add</span>
        <img src={plusIcon} />
      </button>
    </form>
  )
}