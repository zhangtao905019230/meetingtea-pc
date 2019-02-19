let proxyTarget = '';
if (process.env.NODE_ENV === 'development'){
  proxyTarget = 'http://localhost:3030'
} else {
  proxyTarget = 'http://101.132.46.146:3030'
}

module.exports = {
  publicPath: '/',
  devServer: {
    port: 8085,
    proxy: {
      '/api': {
        target: proxyTarget,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}