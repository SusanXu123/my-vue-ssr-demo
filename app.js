const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>the url is： {{ url }}</div>`
  })

  const context = {
    title: 'hello',
    meta: `
    <meta charset="utf-8">
    `
  }

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