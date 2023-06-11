import axios from 'axios'

const API_KEY = '5cde67f4c8d803ea725f2aabbd7545e1'

export async function getWeatherData(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )

    return response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
