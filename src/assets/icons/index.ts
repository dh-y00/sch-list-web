import SvgIcon from '@/components/SvgIcon/SvgIconView.vue'
import { App } from 'vue';

const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext)

const svgRequire = require.context('./svg', false, /\.svg$/)
const result = requireAll(svgRequire)
// 完成本地 svg 图标的导入
// svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

console.error(result)

export default (app: App) => {
  app.component('svg-icon', SvgIcon)    //将引入的SvgIcon这个组件全局注册为<svg-icon>组件
}

