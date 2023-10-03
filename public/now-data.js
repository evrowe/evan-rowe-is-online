const OPENCRITIC_API_BASE_URL = 'https://opencritic-api.p.rapidapi.com/'


async function fetchGames() {
  const response = await fetch(`${OPENCRITIC_API_BASE_URL}game/`)
  const games = await response.json()
  return games 
}

