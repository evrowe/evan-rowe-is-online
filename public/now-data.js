const OPENCRITIC_API_BASE_URL = 'opencritic-api.p.rapidapi.com'
const OPENCRITIC_API_KEY = 'fe3f31aacfmsh87285e4f8848e25p1724b4jsn22c2d47e2056'
// const GAME_IDS = [8525,15580,15003,14907,15151,15125,9136,1887]
// const GAME_IDS = [8525,15580,15003,14907]
const GAME_IDS = [8525]


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
  };
  const response = await fetch(`https://${OPENCRITIC_API_BASE_URL}/game/${gameID}`, options)
  return await response.json()
}

function buildItemHTML(itemName = '', imageURL = '', resourceURL, authorName) {
  const outerLI = document.createElement('li')
  const meta = document.createElement('div')
  const image = document.createElement('img')
  const title = document.createElement('span')
  const author = document.createElement('span')
  const link = document.createElement('a')
    
  outerLI.classList.add('grid-item')
  link.setAttribute('href', resourceURL)
  link.classList.add('item-link')
  image.setAttribute('src', imageURL)
  image.classList.add('item-image')
  title.innerText = itemName
  title.classList.add('item-title')
  author.innerText = authorName
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
  const gameIDs = GAME_IDS
//   gameIDs.forEach(async function(id) {
//     buildItemHTML(game.name, `//img.opencritic.com/${game.images.box.sm}`, `//www.opencritic.com/game/${game.id}`, game.Companies['0']['name'])
    
//     const game = await fetchGameData(id)
//     const outerLI = document.createElement('li')
//     const meta = document.createElement('div')
//     const image = document.createElement('img')
//     const title = document.createElement('span')
//     const developer = document.createElement('span')
//     const link = document.createElement('a')
    
//     outerLI.classList.add('grid-item')
//     link.setAttribute('href', `//www.opencritic.com/game/${game.id}`)
//     link.classList.add('item-link')
//     image.setAttribute('src', `//img.opencritic.com/${game.images.box.sm}`)
//     image.classList.add('item-image')
//     title.innerText = game.name
//     title.classList.add('item-title')
//     developer.innerText = game.Companies['0']['name']
//     developer.classList.add('item-author')
  
//     meta.appendChild(title)
//     meta.appendChild(developer)
//     link.appendChild(image)
//     link.appendChild(meta)
//     outerLI.appendChild(link)
//     document.querySelector('.now-grid.playing').appendChild(outerLI)
//   })
  gameIDs.forEach(async function(id) {
    const game = await fetchGameData(id)
    const itemHTML = buildItemHTML(game.name, `//img.opencritic.com/${game.images.box.sm}`, `//www.opencritic.com/game/${game.id}`, game.Companies['0']['name'])
    document.querySelector('.now-grid.playing').appendChild(itemHTML)
  })
})()