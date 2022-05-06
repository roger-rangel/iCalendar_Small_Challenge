/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
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
            <Routes>
              <Route path="*" element={<main>NOT FOUND</main>} />
              <Route path="/NewEvent" element={<NewEvent />} />
              <Route path = "/all-events" element = {<ViewEvents />} />
            </Routes>
          </div>
        }
      </>
    );
  }


export default App;