import React from 'react'
import Button from '../button/Button'
import './Login.scss'

const Login = () => {
  return (
    <form action="">
        <div className='input-login'>
            <h3>Login</h3>
            <input type="text" placeholder='example@gmail.com' />
            <input type="password" name="" placeholder='Password' />
        </div>
        <Button nameProps='Login'/> 
    </form>

  )
}

export default Login