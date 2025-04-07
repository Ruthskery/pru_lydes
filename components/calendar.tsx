import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar() {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    const res = await fetch('/api/fetchAvailability')
    const data = await res.json()
    setEvents(data.events)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div>
      <h1>My Availability</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  )
}
