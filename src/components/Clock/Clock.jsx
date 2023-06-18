import { useState, useEffect } from 'react'
import './Clock.css'

function Clock() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: '2-digit'
  }
  const formattedDate = date
    .toLocaleDateString(undefined, options)
    .replace(/^\w/, c => c.toUpperCase())
  const formattedTime = date.toLocaleTimeString()

  return (
    <div className="clock-container">
      <p>{formattedDate}</p>
      <p>Hora: {formattedTime}</p>
    </div>
  )
}

export default Clock
