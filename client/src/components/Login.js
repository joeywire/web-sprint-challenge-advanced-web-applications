import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const { push } = useHistory();
  
  const initialCreds = {
    username: "", 
    password: ""
  };

  const [input, setInput] = useState(initialCreds);

  //Event Handlers: 
  const handleChange = e => {
    setInput({
            ...input, 
            [e.target.name]: e.target.value
        });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('/api/login', input)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload);
        push('/protected');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <h3>Login:</h3>
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input
                type="text"
                name="username"
                value={input.username}
                onChange={handleChange}
            />
            <label>Password: </label>
            <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
            />
            <button>Log in!</button>
        </form>
        </div>
    </>
  );
};

export default Login;
