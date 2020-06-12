const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

let template = require('fs').readFileSync('./index.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,  // 推荐
  template, // （可选）页面模板
  // （可选）客户端构建 manifest, 自动推断出最佳的预加载(preload)和预取(prefetch)指令，以及初始渲染所需的代码分割 chunk。
  clientManifest 
})
 
const server = express()
// 让dist中的js静态文件可访问
server.use(express.static('./dist'))

server.get('*', (req, res) => {
  const context = { url: req.url }
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    console.log('end-------')
    if (err) {
      console.log('err:', err)
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080, () => console.log('Example app listening on port 8080!'))


