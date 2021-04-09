
const CalendarEvent = ( {event} ) => {
    const {title, user:{name} } = event;

    return (
        <>
           <span>{title}</span>
           <span>- {name}</span>
        </>
    )
}

export default CalendarEvent
