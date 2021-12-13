import Button from './Button'
import styles from './App.module.css'
import { useState } from 'react'
function App() {
  const [counter, setValue] = useState(0)
  return (
    <div>
      <h1 className={styles.title}>Welcome Back</h1>
      <Button text={'안녕'}></Button>
    </div>
  )
}

export default App
