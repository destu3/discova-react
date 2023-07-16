export function getYear() {
  // Get the current year
  const date = new Date();
  return date.getFullYear();
}

export function getSeason() {
  // Get the current month and determine the season
  const date = new Date();
  const month = date.getMonth() + 1;
  let season = 'winter';

  if (month >= 10 && month <= 12) {
    season = 'fall';
  } else if (month >= 4 && month <= 6) {
    season = 'spring';
  } else if (month >= 7 && month <= 9) {
    season = 'summer';
  }

  // Convert the season to uppercase and return it
  return season.toUpperCase();
}

export function getNextSeason(season) {
  // Get the next season based on the current season
  if (season === 'WINTER') {
    return 'SPRING';
  } else if (season === 'SPRING') {
    return 'SUMMER';
  } else if (season === 'SUMMER') {
    return 'FALL';
  } else {
    return 'WINTER';
  }
}
