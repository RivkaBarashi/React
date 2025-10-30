import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Background from './components/background'
import Message from './components/Message'
import PasswordStrengthIndicator from './components/PasswordStrengthIndicator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


     <Background />
     <Message />
     <PasswordStrengthIndicator />

    </>
  )
}

export default App
