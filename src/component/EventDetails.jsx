import React from 'react'

const EventDetails = (props) => {
  return (
    <div className="event-details">
      <h2 className="event-name">{props.events.name}</h2>
      <p className="event-date">{props.events.date}</p>
      <p className="event-venue">{props.events.venue}</p>
      <p className="event-description">{props.events.description}</p>
      <div className="event-schedule">
        <h3 className="event-schedule-title">Event Schedule</h3>
        <ul className="event-schedule-list">
          {props.events.schedule.map((item) => (
            <li key={item.time} className="event-schedule-item">
              <span className="event-schedule-time">{item.time}</span>
              <span className="event-schedule-agenda">{item.agenda}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="event-contact">
        <h3 className="event-contact-title">Contact Us</h3>
        <p className="event-contact-info">
          For any inquiries or registration, please contact the organizing
          members:
        </p>
        <ul className="event-contact-list">
          {props.events.contact.map((member) => (
            <li key={member.name} className="event-contact-item">
              <span className="event-contact-name">{member.name}</span>
              <span className="event-contact-email">{member.email}</span>
              <span className="event-contact-phone">{member.phone}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="event-button" onClick={props.onBack}>
        Back to Events
      </button>
    </div>
  )
}

export default EventDetails