import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Counter App</h1>
      <div>
        <span>Count: {count}</span>
        <div style={{marginTop: '20px'}}>
          <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
          <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
