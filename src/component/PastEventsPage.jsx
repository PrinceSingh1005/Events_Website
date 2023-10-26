import React from 'react'

const PastEventsPage = () => {
  return (
    <div className="past-events-page">
        <h1 className="past-events-title">Past Events</h1>
        <p className="past-events-subtitle">
          Here are some of the events that we have organized in the past. You can
          click on any event to view its details and see what you have missed.
        </p>
        <EventList events={props.events} onSelect={props.onSelect} />
      </div>
  )
}

export default PastEventsPage