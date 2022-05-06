/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { configureStore, combineReducers } from "@reduxjs/toolkit";

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
    reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

