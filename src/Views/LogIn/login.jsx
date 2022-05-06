/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../Controllers/Redux/authSlice';
import logo from '../../assets/logo/logo.png'
import './login.css';

export default () => {
    const dispatch = useDispatch();
    
    const [formInput, setFormInput] = useState({
        name: "",
        password: ""
    })
    
    function inputChanged(e) {
        setFormInput({
            ...formInput,
           [e.target.name]: e.target.value
        })
    }
    
    function submit(e) {
        dispatch(signIn(formInput));
        e.preventDefault();
    }
    
    return (
        <div className='login'> 
          <div className='login-box'>
            <img className='image-logo' src={logo} alt='Logo'></img>
            <form className='login-form'>
                <h1>Login</h1>
                <input name='name' type="text" placeholder='Name' onChange={inputChanged} value={formInput.name}>
                </input>
                <input name='password' type="password" placeholder='Password' onChange={inputChanged} value={formInput.password}>
                </input>
                <button name='Login' type='submit' onClick={submit} >Login</button>
                <div className="links">
                    <a href="/">Forgot Password</a>
                    <a href="/">Sign Up</a>
			    </div>
            </form>
          </div>
        </div>
    )
}