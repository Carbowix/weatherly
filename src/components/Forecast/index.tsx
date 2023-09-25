import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doesCityExist } from 'utils'
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import WeatherIcon from 'components/WeatherIcons'
import LoadingSpinner from 'components/LoadingSpinner'

export interface forecastResponseDay {
  date: string // FORMAT: "YYYY-MM-DD"
  day: {
    avghumidity: number
    avgtemp_c: number
    uv: number
    condition: {
      code: number
      text: string
    }
  }
}

export interface forecastResponse {
  current: {
    condition: {
      code: number
      text: string
    }
    is_day: 0 | 1
    temp_c: number
    temp_f: number
    uv: number
    wind_mph: number
    humidity: number
    wind_dir: string
  }
  location: {
    country: string
    localtime: string // FORMAT: "YYYY-MM-DD HH:MM"
    name: string
    lat: number
    lon: number
  }

  forecast: {
    forecastday: forecastResponseDay[]
  }
}

export const weatherAPI = 'http://api.weatherapi.com/v1/forecast.json'

function WeatherTabForecastSlot({
  weatherIconCode,
  forecastDate,
  temperature,
  active
}: {
  weatherIconCode: number
  forecastDate: string
  temperature: string
  active: boolean
}): React.ReactElement {
  return (
    <>
      <div
        className={
          'px-2 rounded-lg border flex flex-col items-center ' +
          (active
            ? 'bg-slate-400 text-black border-slate-400'
            : 'bg-slate-800 border-white')
        }
      >
        <WeatherIcon weatherIconCode={weatherIconCode} isDay={true} />
        <h2 className="text-xl">
          {new Date(forecastDate.split(' ')[0]).toLocaleDateString('en-US', {
            weekday: 'long'
          })}
        </h2>
        <h2 className="text-xl">{temperature} °C</h2>
      </div>
    </>
  )
}

function WeatherTabRow({
  iconName,
  header,
  value
}: {
  iconName: string
  header: string
  value: string
}): React.ReactElement {
  return (
    <div className="w-full h-8 flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-8 h-8"
          src={`/src/components/WeatherIcons/icons/${iconName}.svg`}
        />
        <p className="text-xl">{header}</p>
      </div>
      <div className="text-xl">
        <p>{value}</p>
      </div>
    </div>
  )
}

export default function Forecast() {
  const [cityWeatherData, setCityWeatherData] =
    useState<forecastResponse | null>(null)
  const { city } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (
      city &&
      city.match(/^[^\n\r]*[\w\s:]+:\s*-?\d+(\.\d+)?,-?\d+(\.\d+)?[^\n\r]*$/gm)
    ) {
      // cityname:lat,lng
      const splittedParams = city.split(':') // Index 0: CityName, Index 1: coords
      if (!doesCityExist(splittedParams[0], splittedParams[1]))
        return navigate('/')
      const apiQuery = new URLSearchParams({
        key: import.meta.env.VITE_WEATHERAPI_KEY,
        q: splittedParams[1], // Search by Coords
        days: '3',
        aqi: 'no',
        alerts: 'no'
      })
      fetch(weatherAPI + '?' + apiQuery)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((data: forecastResponse) => {
          setCityWeatherData(data)
        })
    } else {
      navigate('/')
    }
  }, [])

  if (!cityWeatherData)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <LoadingSpinner />
      </div>
    )

  return (
    <div className="relative lg:w-1/2 w-full h-screen flex flex-col items-center px-2 font-inter">
      <div className="w-full h-24 flex items-center gap-4 ">
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-slate-400 duration-300 text-3xl rounded-xl"
        >
          <BiArrowBack />
        </button>
        <div className="w-auto text-gray-50 font-light">
          <h2 className="text-2xl md:text-4xl">
            {cityWeatherData.location.name}, {cityWeatherData.location.country}
          </h2>
        </div>
      </div>
      <hr className={'style-six w-full'} />

      <div className="w-full md:h-3/4 lg:h-1/2 h-2/4 my-4">
        <div className="flex w-full md:h-4/5 h-3/4 items-center">
          <div className="w-2/3 h-full bg-blue-400 rounded-lg p-4">
            <div className="w-full h-[30%]  flex flex-col gap-1">
              <h2 className="text-3xl font-semibold">
                {new Date(
                  cityWeatherData.location.localtime.split(' ')[0]
                ).toLocaleDateString('en-US', { weekday: 'long' })}
              </h2>
              <h4 className="text-xl">
                {new Date(
                  cityWeatherData.location.localtime.split(' ')[0]
                ).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: '2-digit'
                })}
              </h4>
              <div className="flex gap-1 items-center text-xl">
                <AiOutlineClockCircle />
                <h4>{cityWeatherData.location.localtime.split(' ')[1]}</h4>
              </div>
            </div>
            <div className="w-full h-[65%] flex flex-col justify-end items-start gap-1">
              <WeatherIcon
                weatherIconCode={cityWeatherData.current.condition.code}
                isDay={Boolean(cityWeatherData.current.is_day)}
              />
              <h2 className="text-4xl font-semibold">
                {Math.round(cityWeatherData.current.temp_c)} °C
              </h2>
              <h4 className="text-3xl">
                {cityWeatherData.current.condition.text}
              </h4>
            </div>
          </div>
          <div className="h-[90%] w-full bg-slate-800 rounded-r-lg">
            <div className="flex flex-col gap-2 w-full h-full p-4 items-center">
              <WeatherTabRow
                iconName="humidity"
                header="Humidity"
                value={`${cityWeatherData.current.humidity}%`}
              />
              <WeatherTabRow
                iconName="wind"
                header="Wind Speed"
                value={`${cityWeatherData.current.wind_mph} mph`}
              />
              <WeatherTabRow
                iconName="compass"
                header="Wind Direction"
                value={`${cityWeatherData.current.wind_dir}`}
              />
              {cityWeatherData.current.is_day == 1 && (
                <WeatherTabRow
                  iconName="uv-index"
                  header="UV Rate"
                  value={`${cityWeatherData.current.uv}`}
                />
              )}

              <div className="flex gap-1 w-full justify-center">
                {cityWeatherData.forecast.forecastday.map(
                  (forecastDay, index) => {
                    return (
                      <WeatherTabForecastSlot
                        key={'WTAB_' + index}
                        active={index == 0}
                        forecastDate={forecastDay.date}
                        weatherIconCode={forecastDay.day.condition.code}
                        temperature={Math.round(
                          forecastDay.day.avgtemp_c
                        ).toString()}
                      />
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
