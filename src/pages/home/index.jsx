import { useNavigate, useSearchParams } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [param] = useSearchParams()

  const id = param.get('id')
  const name = param.get('name')

  return (
    <div className="login-container">
      <h1>Home</h1>
      <h2>id: {id}</h2>
      <h2>name: {name}</h2>
      <button onClick={() => navigate('/login')}>to-Login</button>
    </div>
  )
}

export default Home
