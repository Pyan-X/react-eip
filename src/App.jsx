import './App.css'

import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default App
