import citiesData from 'components/Searchbar/data/cities'

// Check if city exists before doing some special calls..
function doesCityExist(cityName: string, coords: string): boolean {
  return citiesData.some(
    (cityInfo) =>
      cityInfo.city.toLowerCase() === cityName.toLowerCase() &&
      areCoordinatesApproximatelyEqual(
        coords.toLowerCase(),
        cityInfo.coords.toLowerCase()
      )
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

function areCoordinatesApproximatelyEqual(
  coord1: string,
  coord2: string
): boolean {
  // Split the coordinates into latitude and longitude
  const [lat1, lon1] = coord1.split(',').map(parseFloat)
  const [lat2, lon2] = coord2.split(',').map(parseFloat)

  // Define a tolerance for the allowed difference
  const tolerance = 0.3

  // Check if the absolute difference between coordinates is within tolerance
  const latDiff = Math.abs(lat1 - lat2)
  const lonDiff = Math.abs(lon1 - lon2)

  return latDiff <= tolerance && lonDiff <= tolerance
}

export { doesCityExist, getRandomCities, areCoordinatesApproximatelyEqual }
