// check for current system-level theme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Listen for clicks on the theme switcher
const toggleTheme = e => {
  if (e.target.className !== 'slider') return
  let body = document.querySelector('body')

  if (body.hasAttribute('data-theme') && body.attributes['data-theme'] == 'dark') {
    prefersDarkMode ? body.setAttribute('data-theme', 'light') : body.removeAttribute('data-theme')
  } else {
    prefersDarkMode ? body.setAttribute('data-theme', 'dark') : body.removeAttribute('data-theme')
  }
}

// Listen for clicks on scroller
const triggerScroll = e => {
  console.log('scroll tapped!')
  if (e.target.className !== 'to-top') return
  let body = document.querySelector('body')

  if (window.scrollY > 0) {
    window.scrollTo(0, 0)
  }
}

document.addEventListener('click', toggleTheme)
document.addEventListener('click', triggerScroll)