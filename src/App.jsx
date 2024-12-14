import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState("samim");
  return (
    <div>Hello World {count}</div>
  )
}
