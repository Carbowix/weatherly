interface TimeInfo {
  time: string;
  isNight: boolean;
}

// Returns time based on epochTimestamp given by weatherAPI
function convertEpochToTime(epochTimestamp: number): TimeInfo {
  const date = new Date(epochTimestamp * 1000);

  const hour = date.getHours();

  let isNight = false;
  if (hour >= 18 || hour < 6) {
    isNight = true;
  }

  // Step 4: Return the Result
  return {
    time: `${hour.toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`,
    isNight: isNight,
  };
}