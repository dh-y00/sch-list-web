const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')
const path = require('path');

const AutoImport = require('unplugin-auto-import/webpack').default
const Components = require('unplugin-vue-components/webpack').default
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      new DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
      })
    ]
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1912',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
