import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Todos} from './components/todo.jsx'
import {CreateTodo} from './components/createTodo.jsx'

function App() {
  const [todos, setTodos] = useState([])

  return (
    
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
      </div>
       
    
  )
}

export default App
