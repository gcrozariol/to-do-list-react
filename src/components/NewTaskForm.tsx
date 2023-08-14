import { ChangeEvent, FormEvent, useState } from 'react'
import plusIcon from '../assets/plus.svg'
import styles from './NewTaskForm.module.css'

export function NewTaskForm() {
  const [newTask, setNewTask] = useState('')

  const isNewTaskEmpty = newTask.length === 0

  function handleCreateTask(e: FormEvent) {
    e.preventDefault()

    console.log('TODO: Create task ', newTask)
    setNewTask('')
  } 

  function handleAddNewTask(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    setNewTask(e.target.value)
  }

  return (
    <form 
      className={styles.search} 
      onSubmit={handleCreateTask}
    >
      <input 
        value={newTask} 
        placeholder='Add new task'
        onChange={handleAddNewTask}
      />
      <button disabled={isNewTaskEmpty}>
        <span>Add</span>
        <img src={plusIcon} />
      </button>
    </form>
  )
}