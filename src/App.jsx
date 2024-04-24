
// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import MyInput from './components/MyInput'

function App() {

  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)

  return (
    <>
      <MyInput nombre={nombre} setNombre={setNombre} edad={edad} setEdad={setEdad} />
    </>
  )
}

export default App
