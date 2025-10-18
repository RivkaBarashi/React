import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BooksTable from './commponent/BooksTable'
import Course_english from './commponent/Course_english'
import Course_matematic from './commponent/Course_matematic'
import Grad_english from './commponent/Grad_english'
import Personal_details from '../../components/PersonDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BooksTable/>  
     <Course_english/>
     <Course_matematic/>
     <Grad_english/>
     <Personal_details/>
    </>
  )
}

export default App
