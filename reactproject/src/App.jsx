import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal_DetailsForm from './components/Personal_DetialsForm'
import School from './components/School'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Personal_DetailsForm />
      <School/>
    </>
  )
}

export default App
