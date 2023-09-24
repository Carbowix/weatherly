import { AiOutlineSearch } from 'react-icons/ai'
import ReactCountryFlag from 'react-country-flag'
import { ChangeEvent, useState } from 'react'
import citiesData, { cityEntry } from './data/cities'

const MAX_SUGGESTIONS = 20 // Maximum number of suggestions to display in search
const countryFlags: { [key: string]: React.ReactElement } = {}
const citiesByCountry: { [key: string]: cityEntry[] } = {}

citiesData.forEach((city) => {
  if (!citiesByCountry[city.country]) {
    citiesByCountry[city.country] = []
    countryFlags[city.country] = (
      <ReactCountryFlag
        style={{
          width: '1.5rem'
        }}
        countryCode={city.iso}
        svg
        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
        cdnSuffix="svg"
        title={city.iso}
      />
    )
  }
  citiesByCountry[city.country].push(city)
})

function SearchEntry({ name, flag }: searchResultEntry) {
  return (
    <div className="border-b-[1px] border-b-slate-700 py-1 w-[99%]">
      <div className="flex gap-2 items-center hover:bg-slate-700 duration-500 cursor-pointer">
        {flag}
        <div>{name}</div>
      </div>
    </div>
  )
}

interface searchResultEntry {
  id?: string
  name: string
  flag: React.ReactElement
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<searchResultEntry[]>([])

  const handleSearch = (query: string) => {
    let id = 0
    setSearchQuery(query)
    if (query === '') {
      setSearchResults([])
      return
    }

    const regex = new RegExp(`^${query}`, 'i') // 'i' flag for case-insensitive search

    const countryMatches = Object.keys(citiesByCountry).filter((country) =>
      regex.test(country)
    )

    const cityMatches = citiesData.filter((cityEntry) =>
      regex.test(cityEntry.city)
    )

    let combinedMatches: searchResultEntry[] = []

    // Add city matches first
    combinedMatches = cityMatches.slice(0, MAX_SUGGESTIONS).map((city) => ({
      id: city.city + `_${++id}`,
      name: city.city,
      flag: countryFlags[city.country]
    }))

    // If city matches don't exceed the limit, add cities from matching countries
    if (combinedMatches.length < MAX_SUGGESTIONS) {
      for (const country of countryMatches) {
        const citiesInCountry = citiesByCountry[country]
        for (const city of citiesInCountry) {
          if (combinedMatches.length < MAX_SUGGESTIONS) {
            combinedMatches.push({
              id: city.city + `_${++id}`,
              name: city.city,
              flag: countryFlags[city.country]
            })
          } else {
            break // Stop adding when the limit is reached
          }
        }
      }
    }
    // console.log('Cities: ' + combinedMatches.map((city) => city.name))
    setSearchResults(combinedMatches)
  }

  return (
    <form className="relative w-11/12 md:w-2/5 h-full mx-auto">
      <div className="relative h-full">
        <input
          className="rounded-full bg-slate-700 w-full h-full px-4"
          type="search"
          placeholder="Search a city..."
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
        />
        <button className="rounded-full absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-800">
          <AiOutlineSearch />
        </button>
      </div>
      {searchQuery !== '' && searchResults.length === 0 && (
        <div className="absolute top-14 p-4 bg-slate-800 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          <div className="border-b-[1px] border-b-slate-700 py-1 ">
            No Results Found...
          </div>
        </div>
      )}
      {searchResults.length > 0 && (
        <div className="absolute top-14 p-4 bg-slate-800 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          <div className="max-h-[10.5rem] lg:max-h-[21rem] overflow-y-auto">
            {/* Set a fixed max height and enable vertical scrolling */}
            {searchResults.map((city) => (
              <SearchEntry key={city.name} {...city} />
            ))}
          </div>
        </div>
      )}
    </form>
  )
}
