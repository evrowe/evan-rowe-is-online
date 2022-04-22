// Delegate events
const on = (selector, eventType, childSelector, eventHandler) => {
  const elements = document.querySelectorAll(selector)
  
  elements.forEach( element => {
    element.addEventListener(eventType, eventOnElement => {
      if (eventOnElement.target.matches(childSelector)) {
        eventHandler(eventOnElement)
      }
    })
  })
}

// check for current system-level theme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Listen for clicks on the theme switcher
on('.toggler', 'click', '.slider', e => {
  console.log('hi')
  let body = document.querySelector('body')

  if (body.hasAttribute('data-theme') && body.attributes['data-theme'] == 'dark') {
    prefersDarkMode ? body.setAttribute('data-theme', 'light') : body.removeAttribute('data-theme')
  } else {
    prefersDarkMode ? body.setAttribute('data-theme', 'dark') : body.removeAttribute('data-theme')
  }
})