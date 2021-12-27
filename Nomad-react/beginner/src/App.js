import { useState, useEffect } from 'react'
import CoinTracker from './CoinTracker'

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])

  const onChange = e => {
    setToDo(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    if (toDo === '') {
      return
    }
    setToDos(curArray => [toDo, ...curArray])
    setToDo('')
  }
  console.log(toDos)
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your todo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <hr />
      <CoinTracker />
    </div>
  )
}

export default App
