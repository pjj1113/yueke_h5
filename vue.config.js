

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      ['/api']: {
        // target: `http://kid-dev.aukid.net:9999`,
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

