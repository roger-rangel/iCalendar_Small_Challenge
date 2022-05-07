/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import "react-datetime/css/react-datetime.css";

// Reducers
import authReducer from './Controllers/Redux/authSlice';
import eventReducer from './Controllers/Redux/eventSlice';
import userReducer from './Controllers/Redux/userSlice';

//Redux Configure
const reducer = combineReducers({
    auth: authReducer,
    events: eventReducer,
    user: userReducer
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Provider>,
);

