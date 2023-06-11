import { useState, useEffect } from 'react'
import './Clock.css' // Importe o arquivo CSS para estilização

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

  const formattedDate = date.toLocaleDateString()
  const formattedTime = date.toLocaleTimeString()

  return (
    <div className="clock-container">
      <p>Data: {formattedDate}</p>
      <p>Hora: {formattedTime}</p>
    </div>
  )
}

export default Clock
