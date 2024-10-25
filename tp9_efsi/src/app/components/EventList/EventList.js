"use client";
import React from 'react';
import styles from './EventList.module.css';
import Link from 'next/link';
const events = [
  {
    id: 1,
    name: "Summer Music Festival",
    description: "A weekend of live music performances",
    date: "2023-07-15",
    duration: "48 hours",
    price: 150,
    isRegistrationOpen: true,
    capacity: 5000
  },
  {
    id: 2,
    name: "Tech Conference 2023",
    description: "Learn about the latest in technology",
    date: "2023-09-20",
    duration: "8 hours",
    price: 250,
    isRegistrationOpen: true,
    capacity: 1000
  },
  // Add more events as needed
];

const EventList = () => {
    return (
      <div className={styles.eventList}>
        <h2>Upcoming Events</h2>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <Link href={`/events/${event.id}`}>
              <h3>{event.name}</h3>
            </Link>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Duration: {event.duration}</p>
            <p>Price: ${event.price}</p>
            <p>Registration: {event.isRegistrationOpen ? 'Open' : 'Closed'}</p>
            <p>Capacity: {event.capacity}</p>
          </div>
        ))}
      </div>
    );
  };

export default EventList;
