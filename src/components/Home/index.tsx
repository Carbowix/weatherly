import SearchBar from 'components/Searchbar'
import HomePageDecoration from './decoration'
import WeatherSlider from 'components/WeatherSlider'

export default function Home() {
  return (
    <>
      <HomePageDecoration />
      <div className="relative lg:w-4/5 md:w-full h-screen flex flex-col gap-4 items-center ">
        <div className="w-full h-32 flex justify-center items-center  gap-4">
          <div>
            <img className="w-24 h-24" src="/src/public/favicon.svg" />
          </div>
          <div className="w-auto font-inter text-gray-50">
            <h2 className="text-5xl md:text-6xl">Weatherly</h2>
          </div>
        </div>
        <div className="text-center w-full">
          <h4 className="text-3xl md:text-4xl font-thin text-slate-100">
            Know your weather with a
            <span className=" underline decoration-teal-500 px-3">CLICK</span>
          </h4>
        </div>
        <div className="w-full h-12">
          <SearchBar />
        </div>
        <div className="w-full md:w-[70%] h-2/3">
          <div className="w-full px-2">
            <h2 className="text-2xl lg:text-4xl py-2">Popular Cities</h2>
            <hr className="style-six" />
          </div>
          <WeatherSlider />
        </div>
      </div>
    </>
  )
}
