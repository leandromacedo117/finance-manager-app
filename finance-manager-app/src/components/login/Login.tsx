import React from 'react'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
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
  const [ authentication, setAuthentication] = React.useState(false);

  // formulario 
  const [formData, setFormData] = React.useState<LoginUser>({
    email: '',
    password: ''
});


const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    console.log(formData.email)
};

  const getData: React.FormEventHandler<HTMLFormElement>  = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('http://localhost:4500/login', formData);
      const userData = res.data[0];
      if (userData.email === formData.email && userData.user_password == formData.password ) {
        setAuthentication(true);
      } else {
        console.log('user não encontra');
      }
    } catch (err) {
      console.log(`Erro: ${err}`);
    }
  };




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
        {authentication ?
        (<Link to='/'>
          <Button nameProps='Login'/> 
        </Link>) 
        : <Button nameProps='Login'/> }
    </form>

  )
}

export default Login