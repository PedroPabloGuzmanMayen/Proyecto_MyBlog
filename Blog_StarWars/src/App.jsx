import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <Button onClick={() => setCount(count + 1)} text="click me" />
      <Button onClick={() => setCount(count - 1)} text="Decrement" />
    </div>

  )
}

export default App
