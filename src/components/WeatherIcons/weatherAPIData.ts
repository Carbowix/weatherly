// List of icons relative to weatherAPI weather code
// It might need some improvements for some codes
// List of codes is available at: https://www.weatherapi.com/docs/weather_conditions.json
const weatherData: { [key: number]: { day: String; night: string } } = {
  1000: {
    day: 'clear-day',
    night: 'clear-night'
  },
  1003: {
    day: 'partly-cloudy-day',
    night: 'partly-cloudy-night'
  },
  1006: {
    day: 'cloudy',
    night: 'cloudy'
  },
  1009: {
    day: 'overcast-day',
    night: 'overcast-night'
  },
  1030: {
    day: 'mist',
    night: 'mist'
  },
  1063: {
    day: 'partly-cloudy-day-drizzle',
    night: 'partly-cloudy-night-drizzle'
  },
  1066: {
    day: 'partly-cloudy-day-snow',
    night: 'partly-cloudy-night-snow'
  },
  1069: {
    day: 'partly-cloudy-day-sleet',
    night: 'partly-cloudy-night-sleet'
  },
  1072: {
    day: 'partly-cloudy-day-sleet',
    night: 'partly-cloudy-night-sleet'
  },
  1087: {
    day: 'thunderstorms-day',
    night: 'thunderstorms-night'
  },
  1114: {
    day: 'snow',
    night: 'snow'
  },
  1117: {
    day: 'snow',
    night: 'snow'
  },
  1135: {
    day: 'fog-day',
    night: 'fog-night'
  },
  1147: {
    day: 'extreme-day-fog',
    night: 'extreme-night-fog'
  },
  1150: {
    day: 'partly-cloudy-day-drizzle',
    night: 'partly-cloudy-night-drizzle'
  },
  1168: {
    day: 'extreme-day-drizzle',
    night: 'extreme-night-drizzle'
  },
  1153: {
    day: 'partly-cloudy-day-drizzle',
    night: 'partly-cloudy-night-drizzle'
  },
  1171: {
    day: 'extreme-day-drizzle',
    night: 'extreme-night-drizzle'
  },
  1180: {
    day: 'drizzle',
    night: 'drizzle'
  },
  1183: {
    day: 'partly-cloudy-day-rain',
    night: 'partly-cloudy-night-rain'
  },
  1186: {
    day: 'partly-cloudy-day-rain',
    night: 'partly-cloudy-night-rain'
  },
  1189: {
    day: 'partly-cloudy-day-rain',
    night: 'partly-cloudy-night-rain'
  },
  1192: {
    day: 'rain',
    night: 'rain'
  },
  1195: {
    day: 'rain',
    night: 'rain'
  },
  1198: {
    day: 'partly-cloudy-day-hail',
    night: 'partly-cloudy-night-hail'
  },
  1201: {
    day: 'rain',
    night: 'rain'
  },
  1204: {
    day: 'partly-cloudy-day-sleet',
    night: 'partly-cloudy-night-sleet'
  },
  1207: {
    day: 'sleet',
    night: 'sleet'
  },
  1210: {
    day: 'partly-cloudy-day-snow',
    night: 'partly-cloudy-night-snow'
  },
  1213: {
    day: 'partly-cloudy-day-snow',
    night: 'partly-cloudy-night-snow'
  },
  1219: {
    day: 'partly-cloudy-day-snow',
    night: 'partly-cloudy-night-snow'
  },
  1222: {
    day: 'snow',
    night: 'snow'
  },
  1225: {
    day: 'snow',
    night: 'snow'
  },
  1237: {
    day: 'hail',
    night: 'hail'
  },
  1240: {
    day: 'partly-cloudy-day-rain',
    night: 'partly-cloudy-night-rain'
  },
  1243: {
    day: 'rain',
    night: 'rain'
  },
  1246: {
    day: 'rain',
    night: 'rain'
  },
  1249: {
    day: 'partly-cloudy-day-sleet',
    night: 'partly-cloudy-night-sleet'
  },
  1252: {
    day: 'sleet',
    night: 'sleet'
  },
  1255: {
    day: 'partly-cloudy-day-snow',
    night: 'partly-cloudy-night-snow'
  },
  1258: {
    day: 'snow',
    night: 'snow'
  },
  1261: {
    day: 'partly-cloudy-day-hail',
    night: 'partly-cloudy-night-hail'
  },
  1264: {
    day: 'hail',
    night: 'hail'
  },
  1273: {
    day: 'thunderstorms-day-rain',
    night: 'thunderstorms-night-rain'
  },
  1276: {
    day: 'thunderstorms-day-extreme-rain',
    night: 'thunderstorms-night-extreme-rain'
  },
  1279: {
    day: 'thunderstorms-day-snow',
    night: 'thunderstorms-night-snow'
  },
  1282: {
    day: 'thunderstorms-day-extreme-snow',
    night: 'thunderstorms-night-extreme-snow'
  }
}

export default weatherData
