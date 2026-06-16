import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = async () => {
        await login()
        navigate('/home')
    }
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
