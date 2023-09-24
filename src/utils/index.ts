import citiesData from 'components/Searchbar/data/cities'

// Check if city exists before doing some special calls..
function doesCityExist(cityName: string): boolean {
  return citiesData.some(
    (cityInfo) => cityInfo.city.toLowerCase() === cityName.toLowerCase()
  )
}
// Get random cities for homepage weather cards
function getRandomCities(numCities: number): string[] {
  const cities = [
    'New York',
    'London',
    'Paris',
    'Tokyo',
    'Sydney',
    'Rio de Janeiro',
    'Moscow',
    'Cape Town'
  ]

  const selectedCities: string[] = []

  // Ensure numCities doesn't exceed the total number of cities
  numCities = Math.min(numCities, cities.length)

  while (selectedCities.length < numCities) {
    const randomIndex = Math.floor(Math.random() * cities.length)
    const randomCity = cities[randomIndex]

    if (!selectedCities.includes(randomCity)) {
      selectedCities.push(randomCity)
    }
  }

  return selectedCities
}

export { doesCityExist, getRandomCities }
