/* eslint-disable no-unused-vars */
import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendar = () => {
    return (
        <section>
            <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            />
        </section>

    )
}

export default Calendar;