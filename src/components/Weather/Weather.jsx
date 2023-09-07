import { useEffect, useState } from 'react'
import { contents } from '../../assets/translate/contents'
import { getWeatherData } from '../../../weatherAPI'
import './Weather.scss'
import { useAcessibility } from '../../hooks/useAcessibility'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'
import {
  FaTemperatureHigh,
  FaTint,
  FaCloud,
  FaWind,
  FaCompass
} from 'react-icons/fa'

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [invalidCity, setInvalidCity] = useState(false)

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity')
    if (lastCity) {
      setCity(lastCity)
      setSubmitted(true)
    }
  }, [])

  useEffect(() => {
    if (submitted && city) {
      const getWeather = async () => {
        try {
          const data = await getWeatherData(`${city},br`)
          if (data.cod === 200) {
            setWeatherData(data)
            setInvalidCity(false)
            localStorage.setItem('lastCity', city)
          } else {
            setWeatherData(null)
            setInvalidCity(true)
          }
        } catch (error) {
          console.error('Error fetching weather data:', error)
          setWeatherData(null)
          setInvalidCity(true)
        }
      }

      getWeather()

      const interval = setInterval(() => {
        getWeather()
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [submitted, city])

  const handleInputChange = event => {
    setCity(event.target.value)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setCity('')
    setWeatherData(null)
    setInvalidCity(false)
    localStorage.removeItem('lastCity')
  }

  const { theme } = useTheme()
  const { acessibility } = useAcessibility()
  const { currentLanguage } = useLanguage()

  return (
    <div
      className={`weather-container ${theme} ${acessibility} ${currentLanguage}`}
    >
      {!submitted ? (
        <div className="weather-display">
          <input
            type="text"
            onChange={handleInputChange}
            placeholder={contents.weather.placeHolder[currentLanguage]}
          />
          <button onClick={handleSubmit}>
            {contents.weather.buttonSubmit[currentLanguage]}
          </button>
        </div>
      ) : (
        <div>
          {invalidCity ? (
            <div className="weather-search-invalid">
              <p>{contents.weather.errorResp[currentLanguage]}</p>
              <input
                type="text"
                onChange={handleInputChange}
                placeholder={contents.weather.placeHolder[currentLanguage]}
              />
              <button onClick={handleSubmit}>
                {contents.weather.buttonSubmit[currentLanguage]}
              </button>
            </div>
          ) : (
            <div className="weather-display-working">
              {weatherData && (
                <div className="weather-display-status-200">
                  <h3>{weatherData.name}</h3>
                  <p>
                    <FaTemperatureHigh />
                    {contents.weather.temp[currentLanguage]}
                    {weatherData.main.temp}°C
                  </p>
                  <p>
                    <FaTint />
                    {contents.weather.humidity[currentLanguage]}
                    {weatherData.main.humidity}%
                  </p>
                  {weatherData.weather && (
                    <p>
                      <FaCloud />
                      {contents.weather.description[currentLanguage]}
                      {weatherData.weather[0].description}
                    </p>
                  )}
                  {weatherData.wind && (
                    <p>
                      <FaWind />
                      {contents.weather.windSpeed[currentLanguage]}
                      {weatherData.wind.speed} m/s
                    </p>
                  )}
                  {weatherData.wind && (
                    <p>
                      <FaCompass />
                      {contents.weather.windDeg[currentLanguage]}
                      {weatherData.wind.deg}°
                    </p>
                  )}
                  <button onClick={handleReset} className="button200">
                  {contents.weather.changeCity[currentLanguage]}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
