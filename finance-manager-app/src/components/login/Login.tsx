import React from 'react'
import Button from '../button/Button'
import './Login.scss'
import axios from 'axios';

type LoginUser = {
  id: null;
  name: string;
  email: string;
  password: string;
};

const Login = () => {
  // database dados
  const [ data, setData] = React.useState<LoginUser>({
    id: null,
    name: '',
    email: '',
    password:''
  });

  // formulario 
  const [formData, setFormData] = React.useState<LoginUser>({
    email: '',
    password: '',
});


const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    console.log(formData)
};

const getData: React.DOMAttributes<HTMLFormElement> =  async (event) => {
  event.preventDefault()
  axios.post('http://localhost:4500/login', formData)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(`err n: ${err}`))
}


  return (
    <form action="" onSubmit={getData}>
        <div className='input-login'>
            <h3>Login</h3>
            <input
            type="text"
            name='email'
            onChange={handleChange}
            placeholder='example@gmail.com' />
            <input
            type="password"
            name="password" 
            onChange={handleChange}
            placeholder='Password' />
        </div>
        <Button nameProps='Login'/> 
    </form>

  )
}

export default Login