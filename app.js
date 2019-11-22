const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
const createApp = require('./src/app.js')

server.get('*', (req, res) => {

  const context = {
    title: 'hello',
    meta: `
    <meta charset="utf-8">
    `
  }
  let app = createApp({url: req.url})

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    console.log(html)
    res.end(html)
  })
})

server.listen(8080, () => console.log('Example app listening on port 8080!'))