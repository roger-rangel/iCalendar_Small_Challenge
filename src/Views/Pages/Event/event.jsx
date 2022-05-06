/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { produceWithPatches } from 'immer';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../../Controllers/Redux/eventSlice';

export default (props) => {
    const { title, details, time } = props.event;
    function Clicked() {
        props.clicked(props.title);
    }
    
    return (
        <div className='event' onClick={Clicked}>
            <h2 className='title'>{title}</h2>
            <h4 className='details'>{details}</h4>
            <h5 className='time'>{time}</h5>
        </div>
    )  
}
