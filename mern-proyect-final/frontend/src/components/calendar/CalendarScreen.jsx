import { useState } from 'react'
import Navbar from '../ui/Navbar'
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import { messages } from '../../helpers/calendar-messages-es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import AddNewFab from '../ui/AddNewFab';
import DeleteEventFab from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
    const {events, activeEvent} = useSelector(state => state.calendar);
    const dispatch = useDispatch()
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        // double click
        dispatch(uiOpenModal())
    }

    const onSelected = (e) => {
        // selected
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        // view
        setLastView(e);
        localStorage.setItem('lastView',e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
             backgroundColor: "#367cf7",
             borderRadius: '0px' ,
             color: "white"
        };

        return { style };
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccesor="start"
                endAccessor="end"
                messages={messages}
                onDoubleClickEvent={onDoubleClick}
                eventPropGetter={eventStyleGetter}
                onSelectEvent={ onSelected }
                onView={ onViewChange }
                view={ lastView }
                components={{ event: CalendarEvent }}
            />
            <CalendarModal />
            <AddNewFab />

            {activeEvent &&
                <DeleteEventFab />
            }
        </div>
    )
}

export default CalendarScreen
