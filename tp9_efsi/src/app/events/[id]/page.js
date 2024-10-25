"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './EventDetails.module.css';

// Mock function to simulate fetching event details
const fetchEventDetails = async (id) => {
  // In a real application, this would be an API call
  return {
    id: 8,
    name: "Toto",
    description: "La legendaria banda estadounidense se presentará en Buenos Aires.",
    id_event_category: 3,
    id_event_location: 2,
    start_date: "2024-11-22T03:00:00.000Z",
    duration_in_minutes: 120,
    price: "150000",
    enabled_for_enrollment: "1",
    max_assistance: 12000,
    id_creator_user: 1,
    event_location: {
      id: 2,
      id_location: 3397,
      name: "Movistar Arena",
      full_address: "Humboldt 450, C1414 Cdad. Autónoma de Buenos Aires",
      max_capacity: "15000",
      latitude: "-34.593488697344405",
      longitude: "-58.44735886932156",
      id_creator_user: 1,
      location: {
        id: 3397,
        name: "Villa Crespo",
        id_province: 2,
        province: {
          id: 2,
          name: "Ciudad Autónoma de Buenos Aires",
          full_name: "Ciudad Autónoma de Buenos Aires",
        }
      },
    },
    tags: [
      { id: 1, name: "rock" },
      { id: 2, name: "pop" },
    ],
    creator_user: {
      id: 1,
      first_name: "Pablo",
      last_name: "Ulman",
      username: "pablo.ulman@ort.edu.ar",
    },
    event_category: {
      id: 3,
      name: "Recitales",
      display_order: 70
    }
  };
};

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventDetails(id).then(setEvent);
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className={styles.eventDetails}>
      <h1>{event.name}</h1>
      <p className={styles.description}>{event.description}</p>
      <div className={styles.info}>
        <p><strong>Date:</strong> {new Date(event.start_date).toLocaleString()}</p>
        <p><strong>Duration:</strong> {event.duration_in_minutes} minutes</p>
        <p><strong>Price:</strong> ${parseFloat(event.price).toFixed(2)}</p>
        <p><strong>Category:</strong> {event.event_category.name}</p>
        <p><strong>Max Attendance:</strong> {event.max_assistance}</p>
        <p><strong>Registration:</strong> {event.enabled_for_enrollment === "1" ? "Open" : "Closed"}</p>
      </div>
      <div className={styles.location}>
        <h2>Location</h2>
        <p>{event.event_location.name}</p>
        <p>{event.event_location.full_address}</p>
        <p>{event.event_location.location.name}, {event.event_location.location.province.full_name}</p>
      </div>
      <div className={styles.tags}>
        <h2>Tags</h2>
        {event.tags.map(tag => (
          <span key={tag.id} className={styles.tag}>{tag.name}</span>
        ))}
      </div>
      <div className={styles.creator}>
        <h2>Created by</h2>
        <p>{event.creator_user.first_name} {event.creator_user.last_name}</p>
      </div>
    </div>
  );
}
