// 把 components 中的全部组件进行全局注册
// 通过插件的方式
// import ImageView from './ImageView/index.vue'
// import Sku from './XtxSku/index.vue'

export const componentPlugin = {
  install (app) {
    app.component('XtxImageView', () => import('./XtxImageView/index.vue'))
    app.component('XtxSku', () => import('./XtxSku/index.vue'))
  }
}