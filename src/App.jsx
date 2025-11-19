import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Button from './components/button/Button.jsx'
import Input from './components/input/input.jsx'
import './App.css'

// hola caracola

function Landing() {
  const navigate = useNavigate()
  const [text, setText] = useState('')

  const handleClick = () => {
    navigate('/home')
  }

  const onChangeInput = (event) => {
    setText(event.target.value)
  }

  return (
    <div>

      <div style={{ marginBottom: '1rem' }}>
        <Button type="primary">
          {text}
          </Button> 
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Input
          type="text"
          placeholder="Escribe algo..."
          onChange={onChangeInput}
        />
      </div>

      <div>
        <Button type="primary" onClick={handleClick}>
          Ir a Home
        </Button>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Página Home</h1>
      <p>Has navegado correctamente a /home.</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
