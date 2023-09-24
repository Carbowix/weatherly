import WeatherIcons from './weatherAPIData'

export default function WeatherIcon({
  weatherIconCode,
  isDay
}: {
  weatherIconCode: number
  isDay: boolean
}) {
  return (
    <img
      className="w-24 h-20"
      src={`/src/components/WeatherIcons/icons/${
        WeatherIcons[weatherIconCode][isDay ? 'day' : 'night']
      }.svg`}
    />
  )
}
