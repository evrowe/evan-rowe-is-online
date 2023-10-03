const DISCOGS_API_BASE_URL = '//api.discogs.com'
const MUSICBRAINZ_API_BASE_URL = '//musicbrainz.org/ws/2'
const OPENCRITIC_API_BASE_URL = '//opencritic-api.p.rapidapi.com'
const OPENCRITIC_API_KEY = 'fe3f31aacfmsh87285e4f8848e25p1724b4jsn22c2d47e2056'
// const GAME_IDS = [8525,15580,15003,14907,15151,15125,9136,1887]
// const GAME_IDS = [8525,15580,15003,14907]
const GAME_IDS = [8525]
const ALBUM_IDS = [27799152]
const MB_ALBUM_IDS = ['a4ec34fc-699b-4c70-a077-658f9fa126a5']


const nowData = {
  'listening-comment': '',
  'listening': [],
  'playing-comment': 'a list of OpenCritic game IDs, to populate data from the OpenCritic API at opencritic-api.p.rapidapi.com',
  'playing': GAME_IDS,
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
  }
  const response = await fetch(`${OPENCRITIC_API_BASE_URL}/game/${gameID}`, options)
  return await response.json()
}

async function fetchMusicData(albumID) {
  const options = {
    method: 'GET',
    headers: {
      'User-Agent': 'evrowe.com now page music collection via client browser'
    }
  }
  const response = await fetch(`${MUSICBRAINZ_API_BASE_URL}/release/${albumID}`)
  return await response.json()
}

function buildItemHTML({itemName = '', imageURL = '', resourceURL = '', itemAuthor = ''}) {
  const outerLI = document.createElement('li')
  const meta = document.createElement('div')
  const image = document.createElement('img')
  const title = document.createElement('span')
  const author = document.createElement('span')
  const link = document.createElement('a')
    
  outerLI.classList.add('grid-item')
  link.setAttribute('href', resourceURL)
  link.classList.add('item-link')
  meta.classList.add('item-meta')
  image.setAttribute('src', imageURL)
  image.classList.add('item-image')
  title.innerText = itemName
  title.classList.add('item-title')
  author.innerText = itemAuthor
  author.classList.add('item-author')
  
  meta.appendChild(title)
  meta.appendChild(author)
  link.appendChild(image)
  link.appendChild(meta)
  outerLI.appendChild(link)
  
  return outerLI
}

// fetch and display games
(async function() {
  GAME_IDS.forEach(async function(id) {
    const game = await fetchGameData(id)
    const itemHTML = buildItemHTML({
      itemName: game.name,
      imageURL: `//img.opencritic.com/${game.images.box.og}`,
      resourceURL: `//www.opencritic.com/game/${game.id}`,
      itemAuthor: game.Companies['0']['name']
    })
    document.querySelector('.now-grid.playing').appendChild(itemHTML)
  })
  
  MB_ALBUM_IDS.forEach(async function(id){
    const album = await fetchMusicData(id)
    const itemHTML = buildItemHTML({
      itemName: album.title,
      imageURL: ``,
    })
  })
})()