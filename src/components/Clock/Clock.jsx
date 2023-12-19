import { useState, useEffect } from 'react'
import './Clock.css'
import { useLanguage } from '../../hooks/useLanguage'
import { contents } from '../../assets/translate/contents'

export default function Clock() {
  const [date, setDate] = useState(new Date())
  const optionsWeek = { weekday: 'long' }
  const { currentLanguage } = useLanguage()
  const language = currentLanguage
  const locale = language === 'portuguese' ? 'pt-BR' : 'en-US'
  const weekday = date
    .toLocaleDateString(locale, optionsWeek)
    .replace(/^\w/, c => c.toUpperCase())

  const optionsAll = { day: 'numeric', month: 'numeric', year: '2-digit' }
  const formattedDate = date.toLocaleDateString(undefined, optionsAll)
  const formattedTime = date.toLocaleTimeString()

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="clock-container">
      <p>
        {weekday}, {formattedDate}
      </p>
      <p>
        {contents.clock.hour[currentLanguage]} {formattedTime}
      </p>
    </div>
  )
}
