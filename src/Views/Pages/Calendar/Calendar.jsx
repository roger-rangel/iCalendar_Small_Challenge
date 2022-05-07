/* eslint-disable no-unused-vars */
import React, {useRef, useState} from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import NewEvent from '../NewEvent/newEvent'
import { Link } from "react-router-dom";
import styles from "../../RightNavbar/RightNavbar.module.scss";

//ICONS
import {
    MdAddBox
  } from "react-icons/md";

const Calendar = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const calendarRef = useRef(null)

    const onEventAdded = (event) => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent(event)
    }

    return (
        <section>
            {/* ADD NEW EVENT */}
            <div >
                <button onClick={()=> setModalOpen(true)} className={styles.add_new_event}><MdAddBox size={35} style={{ fill: 'rgb(85, 79, 232)' }} /></button>
            </div>
            
            <div style={{position: 'relative', zIndex: 0}}>
                <FullCalendar
                ref = {calendarRef}
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                />
            </div>
            

        <NewEvent isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} />
        </section>
      
    )
}

export default Calendar;