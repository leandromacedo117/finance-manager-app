import React, { useState } from 'react'
import MoneyImage from '../../images/money.png'
import './Authentication.css'
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';

type Props = {
    textButton: string;
}

const Authentication = ({textButton} : Props ) => {
    const [register, setRegister] = useState(false)

    const test = () => {
        setRegister(!register)
    }
  return (
    <div className="Login">
        <div className='container-login'>
            <div className="container-img">
                <img src={MoneyImage} alt="" width='220' />
            </div>
            <div className="form-login">
            {
                !register ? (
                    <Login/>
                ) : (
                    <Register/>
                )
                 
            }
            <button 
            type="submit"
            className='button-create'
            onClick={test}
            > { !register ? "Do create account" : 'I have an account'}
            </button>
            </div>
        </div>
    </div>
  )
}

export default Authentication