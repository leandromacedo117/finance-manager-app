import React from 'react'
import Button from '../button/Button';
import './Register.scss'

type RegisterUser = {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    const [ dataTake, setDataTake ] = React.useState<null | RegisterUser[]>(null)

    const getData: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setDataTake((prev) => ({...prev, [event.target.name]: event.target.value}))
    }

    const sendData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    }

  return (
    <div className="container-register">
        <h3>Register</h3>
        <form
        method="post"
        onSubmit={sendData}
        >
          <div className="input-register">
            <label htmlFor="">Name:</label>
            <input
            type="text"
            placeholder='your Name'
            name='name'
            onChange={getData}/>
          </div>
          <div className="input-register">
            <label htmlFor="">E-mail:</label>
            <input
            type="text"
            placeholder='example@gmail.com'
            name='email'
            onChange={getData}/>
          </div>
          <div className="input-register">
            <label htmlFor="">Password;</label>
            <input
            type="password"
            placeholder='password'
            name='password'
            onChange={getData}/>
          </div>
          <Button nameProps='Register'/>
        </form>
        {/* <Login
        textButton='I have an account'
        /> */}
    </div>
  )
}

export default Register