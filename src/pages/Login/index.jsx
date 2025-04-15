import './index.scss'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">登入</div>
        <div className="login-form">
          <input type="text" placeholder="帳號" />
          <input type="password" placeholder="密碼" />
          <Input placeholder="Basic usage" />
          <button onClick={() => navigate('/')}>登入</button>
        </div>
        <div className="login-footer">
          <Link to="/">忘記密碼?</Link>
          <Link to="/">註冊</Link>
        </div>
      </div>
    </div>
  )
}
