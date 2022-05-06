/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/LogIn/login';


import NewEvent from './Views/Pages/NewEvent/newEvent';
import ViewEvents from './Views/Pages/ViewEvents/viewEvents';



function App() {
  const { auth } = useSelector(state => state);
  const [nav, setNav] = useState(false)
  const value = {nav, setNav}
  
    return (
      <>
        {!auth.LoggedIn ? <Login /> :
          <div className='App'>
            <h1>App</h1>
          </div>
        }
      </>
    );
  }


export default App;