import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载插件
export const lazyPlugin = {
  install (app) {
    // 懒加载指令逻辑
    // 定义全局指令
    app.directive('img-lazy', {
      mounted (el, binding) {
        // el: 指定绑定的元素
        // binding: 指令的参数 binding.value 指令等于号后面的值
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              el.src = binding.value
              stop()
            }
          },
        )
      },
    })
  }
}