import { useState } from 'react'
import Button from './components/Button/button.jsx';
import Input from './components/input/input.jsx';
import './App.css'
import { useNavigate } from 'react-router'; 


function App() {

  const navigate = useNavigate();
  
  const [text, setText] = useState('');

  const handleClick = () => {
     navigate("/home")
  }

  const onChangeInput = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <div>
        <Button>
          {text}
        </Button>
      </div>
      <div>
        <Input onChange={onChangeInput} />
      </div>
      <div>
        <Button onClick={handleClick}>
          ir a home
        </Button>
      </div>
    </div>
  )
}

export default App