/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {retrieveEvents} from '../eventController'

const reducerAction = (state, actions) => { };

const slice = createSlice({
    name: "event",
    initialState: [],
    reducers: {
        getEvents: state => retrieveEvents(),
        createEvent: (state, actions) => {
            
        },
        updateEvent: (state, actions) => {
        
        },
        deleteEvent: (state, action) => {
        
        }
    }
})

export default slice.reducer;

export const {getEvents, createEvent, updateEvent, deleteEvent} = slice.actions;
