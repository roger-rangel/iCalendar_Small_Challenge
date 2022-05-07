/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../../Controllers/Redux/eventSlice';
import Event from '../Event/event';

export default () => {
    const dispatch = useDispatch();
    const { events } = useSelector(state => state);
    
    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    return (
        <div className='page-container'>
            <h1>All Events</h1>
            {events.map((event, key) => (
                <Event key={key} event={event} />
            ))}
        </div>
    )
};
