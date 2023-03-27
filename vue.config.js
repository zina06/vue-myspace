const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy : 'http://localhost:8084',
  },
  transpileDependencies: true
})

module.exports={
  devServer : {
    proxy: 'http://localhost:8084'
  }
} //외부서버