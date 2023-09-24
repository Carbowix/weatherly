import WeatherIcon from 'components/WeatherIcons'

export default function WeatherCard() {
  return (
    <>
      <div className="flex flex-col items-center py-2 rounded-md border-[1px] border-white bg-slate-800 min-w-[15rem] min-h-[16rem] my-2 font-inter hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-2xl font-medium">WEIRD CITY</h2>
        <h4 className="text-1xl">TODAY</h4>
        <WeatherIcon weatherIconCode={1006} />
        <h4 className="text-1xl">Partly Cloudy</h4>
        <div className="flex flex-col items-center w-full ">
          <div className="flex w-full justify-center items-center">
            <img
              className="w-12 h-12"
              src="/src/components/WeatherIcons/icons/thermometer-celsius.svg"
            />
            <h2 className="text-2xl font-medium">32° / 24°</h2>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex items-center justify-center ">
              <img
                className="w-8 h-8"
                src="/src/components/WeatherIcons/icons/wind.svg"
              />
              <h2 className="text-1xl font-light">32 mph</h2>
            </div>
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                src="/src/components/WeatherIcons/icons/precipitation.svg"
              />
              <h2 className="text-1xl font-light">32%</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
