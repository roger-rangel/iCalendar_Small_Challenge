/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Login from './Views/LogIn/login';
import Navbar from './Views/Navbar/Navbar'
import Container from './Views/Container/Container';
import RightNavbar from './Views/RightNavbar/RigthNavBar';
import './App.css';


import NewEvent from './Views/Pages/NewEvent/newEvent';
import ViewEvents from './Views/Pages/ViewEvents/viewEvents';
import Calendar from './Views/Pages/Calendar/Calendar';
import Users from './Views/Pages/Users/Users';
import Modal from 'react-modal';

import NavContext from './Context/NavContext';

Modal.setAppElement('#root')

function App() {
  const { auth } = useSelector(state => state);
  const [nav, setNav] = useState(false)
  const value = {nav, setNav}
  
    return (
      <>
        {!auth.LoggedIn ? <Login /> :
          <div className='App'>
            <NavContext.Provider value={value} >
              <Navbar />
              <Container
                stickyNav={<RightNavbar />}
                content={
                  <Routes>
                    <Route path="*" element={<main>NOT FOUND</main>} />
                    <Route path="/" element={<Calendar />} />
                    <Route path="/create-event" element={<NewEvent />} />
                    <Route path="/users" element={<Users />} />
                    <Route path = "/all-events" element = {<ViewEvents />} />
                  </Routes>
                }
              />
            </NavContext.Provider>
          </div>
        }
      </>
    );
  }


export default App;