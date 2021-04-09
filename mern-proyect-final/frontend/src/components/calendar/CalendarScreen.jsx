import React from 'react'
import Navbar from '../ui/Navbar'
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
    {
        title:'lorem',
        start: moment().toDate(),
        end: moment().add(2,'hours').toDate(),
        bgcolor:'#fafafa'
    }
]

const CalendarScreen = () => {
    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
            localizer={localizer}
            events={events}
            startAccesor="start"
            endAccessor="end"/>
        </div>
    )
}

export default CalendarScreen
