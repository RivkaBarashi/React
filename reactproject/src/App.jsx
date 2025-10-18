import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal_details from './commponent/Personal_details.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Personal_details/>
    </>
  )
}

export default App
