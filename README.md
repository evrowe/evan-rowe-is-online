# evrowe.com

it's my ~~new~~ website lol

## Dependencies

### Website
- Node.js v16
- @11ty/eleventy@v2

### Build
- [actions/checkout@v4](https://www.github.com/actions/checkout/tree/v4/)
- [cjerrington/actions-eleventy@master](https://github.com/cjerrington/actions-eleventy/tree/master/)
- [actions/upload-pages-artifact@v3](https://github.com/actions/upload-pages-artifact/tree/v3/)
- [actions/deploy-pages@v4](https://github.com/actions/deploy-pages/tree/v4/)

## Local Dev Quickstart

### Developing Locally

- Clone this repo 😱
- Install or use the appropriate Node version (i.e. `nvm use 16`)
- `npm i`
- `npm run start`

### Building the Artifact

- `npm run build`
  - (this is just a proxy for `npx eleventy @11ty/eleventy`)

## GitHub Pages, Who Knew?

The really nice thing about building static sites is they're super easy to host pretty much anywhere, and they're a great fit for GitHub Pages. With the advent of GitHub Actions many years ago, GitHub is a pretty effective place to host the source code, build it into an artifact,and deploy &amp; host that artifact on the world wide web.

I don't know if this will be its _permanent_ home (I don't love having all my eggs in one basket, etc), BUT it's good enough for now. I should probably mirror this repo to one or two other places though.

## History Lesson
Originally, this site was 100% written, built, deployed, and hosted on Glitch dot com. It was a really good and cool way of doing things because I could edit the site or its posts from anywhere, make changes, and have them be instantly deployed, plus Glitch allowed for custom domains at the time, and automatically handled TLS provisioning.

On May 22, 2025, [Glitch announced they would be shutting down core components of Glitch's service](https://blog.glitch.com/post/changes-are-coming-to-glitch/), including _web hosting_, effectively putting a big scary countdown timer on many (most?) projects running on the platform. I already had this project's git repo cloned locally AND backed up to GitHub, so I was pretty well on the path to ejecting.

Within two hours of reading the announcement, I had a GitHub actions workflow written to build and deploy the site to GitHub Pages, and I had pointed my domain at that build and provisioned new certs for it all with a few button clicks. Thanks, GitHub! (Also, this is why I like to set low TTLs on DNS records)

You know what, I'm gonna turn this into a blog post instead.