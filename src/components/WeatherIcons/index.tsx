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
      className="w-16 h-16 md:w-24 md:h-20"
      src={`/src/components/WeatherIcons/icons/${
        WeatherIcons[weatherIconCode][isDay ? 'day' : 'night']
      }.svg`}
    />
  )
}
