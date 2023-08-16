import styles from './Checkbox.module.css'
import checkmark from '../assets/checkmark.svg'

interface CheckboxProps {
  active: boolean
  toggleCheckbox: () => void
}

export function Checkbox({ active, toggleCheckbox }: CheckboxProps) {
  function handleToggleCheckbox() {
    toggleCheckbox()
  }

  return (
    <div style={{width: '24px', height: '24px'}}>
      {active ? 
        <div className={styles.checkedBox} onClick={handleToggleCheckbox}>
          <img src={checkmark} />
        </div>
        :
        <div className={styles.uncheckedBox} onClick={handleToggleCheckbox} /> 
      }
    </div>
  )
}