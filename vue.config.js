const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')
const path = require('path');

const AutoImport = require('unplugin-auto-import/webpack').default
const Components = require('unplugin-vue-components/webpack').default
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const Icons = require('unplugin-icons/webpack').default;
const IconsResolver = require('unplugin-icons/resolver').default

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

console.log(resolve('src/assets/icons'))

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: resolve('src/assets/icons'),
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                symbolId: 'icon-[name]'
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          exclude: resolve('src/assets/icons'),
          use: 'file-loader'
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep', ''],
          }),
        ],
      }),
      Icons({
        autoInstall: true,
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
