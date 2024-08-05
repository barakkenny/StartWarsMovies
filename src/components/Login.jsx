import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { app } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate()

  let auth = getAuth()

  const handleInput = (event)=> {
    let newInput = { [event.target.name]: event.target.value};

    setData({ ...data, ...newInput });
  }

  const handleLogin = (e)=> {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, data.email, data.password).then((response)=> {
      console.log(response.user)
      navigate('/home');
    })
    .catch((err)=> {
      alert(err.message)
    })
  }
  return (
    <section className='login__container'>
      <h1 className='login__text'>Login</h1>

      <form  className='form__container' onSubmit={handleLogin}>
        <input className='login__input' 
        type="email" required 
        placeholder='Email' 
        name='email'
        onChange={(event)=>handleInput(event)}
        />
        <input 
        className='login__input' 
        type="password" required 
        placeholder='Password'
        name='password'
        onChange={(event)=>handleInput(event)}
        />
       
        <button className='login__btn'>
          Login
        </button>
      </form>
    </section>
  )
}

export default Login
