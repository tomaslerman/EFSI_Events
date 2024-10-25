"use client";
import styles from "../page.module.css";
import EventList from "../components/EventList/EventList";

export default function Events() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Event Listing</h1>
        <EventList />
      </main>
    </div>
  );
}
