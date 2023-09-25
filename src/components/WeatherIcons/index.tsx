import WeatherIcons from './weatherAPIData'

export default function WeatherIcon({
  weatherIconCode,
  isDay
}: {
  weatherIconCode: number
  isDay: boolean
}) {
  console.log(import.meta.url)
  return (
    <img
      className="w-16 h-16 md:w-24 md:h-20"
      src={
        new URL(
          `../../assets/icons/${
            WeatherIcons[weatherIconCode][isDay ? 'day' : 'night']
          }.svg`,
          import.meta.url
        ).href
      }
    />
  )
}
