/*
enum WeatherIcons {
  ClearDay = 'clear-day',
  ClearNight = 'clear-night',
  Cloudy = 'cloudy',
  Dust = 'dust',
  DustDay = 'dust-day',
  DustNight = 'dust-night',
  Extreme = 'extreme',
  ExtremeDay = 'extreme-day',
  Hurricane = 'hurricane',
  PartlyCloudyDay = 'partly-cloudy-day',
  PartlyCloudyNight = 'partly-cloudy-night',
  Rain = 'rain',
  Sleet = 'sleet',
  Snow = 'snow',
  Thunderstorms = 'thunderstorms',
  Tornado = 'tornado'
}
*/
import WeatherIcons from './weatherAPIData'

export default function WeatherIcon({
  weatherIconCode
}: {
  weatherIconCode: number
}) {
  return (
    <img
      className="w-28 h-20"
      src={`/src/components/WeatherIcons/icons/${WeatherIcons[weatherIconCode].day}.svg`}
    />
  )
}
