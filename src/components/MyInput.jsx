import React, { useState } from 'react'
import { FaBeer, FaJava } from 'react-icons/fa';

const MyInput = ({ nombre, setNombre, edad, setEdad }) => {
  const [bool, setBool] = useState(false)

  const handleChangeName = (e) => {
    setNombre(e.target.value)
  }

  const handleChangeAge = (e) => {
    setEdad(e.target.value)
  }

  const handleClick = () => {
    setBool(!bool)
  }

  return (
    <div>
      <input type="text" onChange={handleChangeName} />
      <p className={"rojo"}>Nombre: {nombre}</p>
      <input type="number" onChange={handleChangeAge} />
      <p style={bool ? { backgroundColor: "blue", color: "yellow" } : { backgroundColor: "yellow", color: "blue" }}>Edad: {edad}</p>
      <button onDoubleClick={handleClick}><FaJava /></button>
    </div>
  )
}

export default MyInput