import React from 'react'

const EventCard = (props) => {
    return (
        <div className="event-card bg-green-500 m-10 w-auto p-4 text-center relative">
          <div className="event-image absolute">
            <img src={props.event.image} alt={props.event.name} />
          </div>
          <div className="event-info">
            <h3 className="event-name">{props.event.name}</h3>
            <p className="event-date">{props.event.date}</p>
            <p className="event-venue">{props.event.venue}</p>
            <p className="event-description">{props.event.description}</p>
            
          </div>
        </div>
      )
}

export default EventCard;

  