import React from 'react';
import Button from '../button/Button';
import './Register.scss';
import axios from 'axios';

type RegisterUser = {
    name: string;
    email: string;
    password: string;
};

const Register = () => {
    const [formData, setFormData] = React.useState<RegisterUser>({
        name: '',
        email: '',
        password: '',
    });

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendData: React.DOMAttributes<HTMLFormElement> = (event) => {
        event.preventDefault();
      
      axios.post('http://localhost:4500/json', formData)
      .then(res => console.log(res))
      .catch(err => console.log(`erro em: ${err}`))
         
        
    };

    return (
        <div className="container-register">
            <h3>Register</h3>
            <form method="post" onSubmit={sendData}>
                <div className="input-register">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-register">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="text"
                        placeholder="example@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-register">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <Button nameProps='Register'  />
            </form>
        </div>
    );
};

export default Register;
