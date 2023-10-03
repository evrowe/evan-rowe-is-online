const OPENCRITIC_API_BASE_URL = 'opencritic-api.p.rapidapi.com'
const OPENCRITIC_API_KEY = 'fe3f31aacfmsh87285e4f8848e25p1724b4jsn22c2d47e2056'

const nowData = {
  'listening-comment': '',
  'listening': [],
  'playing-comment': 'a list of OpenCritic game IDs, to populate data from the OpenCritic API at opencritic-api.p.rapidapi.com',
  'playing': [8525,15580,15003,14907,15151,15125,9136,1887],
  'watching-comment': '',
  'watching': []
}

async function fetchGameData(gameID) {
  const options = {
	  method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': OPENCRITIC_API_KEY,
		  'X-RapidAPI-Host': OPENCRITIC_API_BASE_URL
	  }
  };
  const response = await fetch(`https://${OPENCRITIC_API_BASE_URL}/game/${gameID}`, options)
  const game = await response.json()
  return game
}

async function fetchGamesData(gameIDs = []) {
  if (!(gameIDs instanceof Array) || !gameIDs.length) return
  return await gameIDs.map(async function(id, index) {
    const game = await fetchGameData(id)
    return {
      id,
      image: game.images.box.sm,
      name: game.name,
      developer: game.companies[0].name
    }
  })
}

async function buildGamesHTML () {
  await fetchGamesData(nowData.playing)
  if 
}