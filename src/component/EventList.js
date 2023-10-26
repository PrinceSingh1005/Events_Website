import React from 'react'
import EventCard from './EventCard'
const EventList = (props) => {
  return (
    <div className="event-list flex">
      {props.events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          {...event}
        />
      ))}
    </div>
  )
}

export default EventList
