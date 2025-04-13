import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="login-container">
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate('/login')
        }}
      >
        to-Login
      </button>
    </div>
  )
}

export default Home
