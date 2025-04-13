import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Link to="/Home">Home</Link>
      <button
        onClick={() => {
          navigate('/home')
        }}
      >
        to-Home
      </button>
    </div>
  )
}

export default Login
