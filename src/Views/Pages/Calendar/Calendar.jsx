/* eslint-disable no-unused-vars */
import React, {useRef, useState} from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import NewEvent from '../NewEvent/newEvent'
import axios from 'axios'
import moment from 'moment';

//ICONS
import {
    MdAddBox
  } from "react-icons/md";

const Calendar = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [events, setEvents] = useState([])
    const calendarRef = useRef(null)

    const onEventAdded = (event) => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        })
    }

    async function handleEventAdd(data) {
        await axios.post("/api/calendar/create-event", data.event);
    }

    async function handleDatesSet(data) {
       const response = await axios.get(
           "/api/calendar/get-events?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
       setEvents(response.data);
    }

    return (
        <section>
            {/* ADD NEW EVENT */}
            <div >
                <button style={{
                        display:'flex',
                        justifyContent: 'flex-start',
                        border: 'none',
                        marginTop: '1rem',
                        marginLeft: 'auto',
                        marginRight: '2rem'}}
                    onClick={()=> setModalOpen(true)} >
                    <MdAddBox size={45} style={{ fill: 'rgb(85, 79, 232)' }} />
                </button>
            </div>

            <div style={{position: 'relative', zIndex: 0, padding: '2rem'}}>
                <FullCalendar
                ref = {calendarRef}
                events={events}
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                eventAdd={event => handleEventAdd(event)}
                datesSet={(date) => handleDatesSet(date)}
                />
            </div>
            

        <NewEvent 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)} 
            onEventAdded={event => onEventAdded(event)} 
        />
        </section>
      
    )
}

export default Calendar;