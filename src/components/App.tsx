import HomePageDecoration from './HomePageDecoration'
import SearchBar from './Searchbar'
import WeatherSlider from './WeatherSlider'

function App() {
  return (
    <div className="relative overflow-hidden bg-[#23304c] flex justify-center text-slate-100">
      <HomePageDecoration />
      <div className="relative lg:w-3/4 md:w-full h-screen flex flex-col gap-4 items-center ">
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
        <div className="w-full md:w-2/3 h-2/3">
          <div className="w-full px-2">
            <h2 className="text-2xl lg:text-4xl py-2">Popular Cities</h2>
            <hr className="style-six" />
          </div>
          <WeatherSlider />
        </div>
      </div>
      {/*
<div className="h-screen sm:pb-40 sm:pt-10 bg-red-500">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="my-4">
              <Avatar
                size="large"
                src="https://www.gravatar.com/avatar/4405735f6f3129e0286d9d43e7b460d0"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This is a boilerplate build with Vite, React 18, TypeScript,
              Vitest, Testing Library, TailwindCSS 3, Eslint and Prettier.
            </p>
          </div>
          <div>
            <div className="my-10">
              <a
                href="vscode://"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Start building for free
              </a>
              <div
                aria-hidden="true"
                className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {randoms.map((random, number) => (
                      <div
                        key={`random-${random[number]}`}
                        className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                      >
                        {random.map((number) => (
                          <div
                            key={`random-${number}`}
                            className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                          >
                            <img
                              src={`https://picsum.photos/600?random=${number}`}
                              alt=""
                              className="h-full w-full bg-indigo-100 object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        */}
    </div>
  )
}

export default App
