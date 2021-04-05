

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      ['/api']: {
        // target: `http://192.168.0.103:3001`,
        target: `http://121.36.109.194:3001`,
        // target: `183.129.130.2:20012`,
        changeOrigin: true,
        pathRewrite: {
          ['^/api']: ''
        }
      }
    }
  },
}

