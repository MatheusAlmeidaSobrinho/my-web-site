import { useEffect, useState } from 'react'
import { getWeatherData } from '../../../weatherAPI'

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await getWeatherData('Catanduva,br')
        setWeatherData(data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    getWeather()
  }, [])

  return (
    <div>
      {/* Renderizar os dados do clima */}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Umidade: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  )
}
