import { useNavigate } from 'react-router-dom'
import { type forecastResponse, weatherAPI } from 'components/Forecast'
import WeatherIcon from 'components/WeatherIcons'
import { useEffect, useState } from 'react'
import { getRandomCities } from 'utils'

function WeatherCard({
  cityForecast
}: {
  cityForecast: forecastResponse
}): React.ReactElement {
  const navigate = useNavigate()
  return (
    <>
      <div
        onClick={() =>
          navigate(
            '/forecast/' +
              cityForecast.location.name +
              ':' +
              cityForecast.location.lat +
              ',' +
              cityForecast.location.lon
          )
        }
        className="flex flex-col items-center py-2 rounded-md border-[1px] border-white bg-slate-800 min-w-[15rem] min-h-[16rem] my-2 font-inter hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <h2 className="text-2xl font-medium">{cityForecast.location.name}</h2>
        <h4 className="text-1xl">TODAY</h4>
        <WeatherIcon
          weatherIconCode={cityForecast.current.condition.code}
          isDay={Boolean(cityForecast.current.is_day)}
        />
        <h4 className="text-1xl">{cityForecast.current.condition.text}</h4>
        <div className="flex flex-col items-center w-full ">
          <div className="flex w-full justify-center items-center">
            <img
              className="w-12 h-12"
              src="/src/components/WeatherIcons/icons/thermometer-celsius.svg"
            />
            <h2 className="text-2xl font-medium">
              {Math.round(cityForecast.current.temp_c)}°
            </h2>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex items-center justify-center ">
              <img
                className="w-8 h-8"
                src="/src/components/WeatherIcons/icons/wind.svg"
              />
              <h2 className="text-1xl font-light">
                {cityForecast.current.wind_mph} mph
              </h2>
            </div>
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                src="/src/components/WeatherIcons/icons/precipitation.svg"
              />
              <h2 className="text-1xl font-light">
                {Math.round(cityForecast.current.humidity)}%
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function WeatherSlider() {
  const [selectedCitiesForcast, setSelectedCitiesForecast] = useState<
    forecastResponse[]
  >([])
  useEffect(() => {
    ;(async () => {
      const randomCities = getRandomCities(4)
      const selectedCitiesData = []

      for (const city of randomCities) {
        const apiQuery = new URLSearchParams({
          key: import.meta.env.VITE_WEATHERAPI_KEY,
          q: city.toLowerCase(),
          days: '1',
          aqi: ' no',
          alerts: 'no'
        })

        try {
          const response = await fetch(weatherAPI + '?' + apiQuery)

          if (!response.ok) {
            throw new Error('Network response was not ok.')
          }

          const data = await response.json()
          selectedCitiesData.push(data)
        } catch (error) {
          // Handle errors here
          console.error(error)
        }
      }

      setSelectedCitiesForecast(selectedCitiesData)
    })()
  }, [])
  return (
    <div className="w-full max-h-[35rem] flex flex-col gap-4 items-center overflow-y-auto max-w-full md:flex-wrap md:flex-row my-4 px-2">
      {selectedCitiesForcast.map((cityForecast) => {
        return (
          <WeatherCard
            key={cityForecast.location.name + '_WC'}
            cityForecast={cityForecast}
          />
        )
      })}
    </div>
  )
}
