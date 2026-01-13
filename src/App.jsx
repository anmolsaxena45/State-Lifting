
import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
const [name, setName] = useState('');
  return (
    <div>
      <h1>State Lifting</h1>
     <Card title="Child-1" name={name} setName={setName} />
     <Card title="Child-2" name={name} setName={setName} />
     <p> <b>Name state variable value in Parent Card :</b> {name}</p>

    </div>
  )
}

export default App
