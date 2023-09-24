import WeatherCard from 'components/WeatherCard'

export default function WeatherSlider() {
  return (
    <div className="w-full max-h-[30rem] flex flex-col gap-4 items-center overflow-y-auto max-w-full md:overflow-x-scroll md:flex-row my-4 px-2">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  )
}
