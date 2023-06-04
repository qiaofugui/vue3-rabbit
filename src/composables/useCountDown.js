// 倒计时逻辑函数
import { ref } from 'vue';
import dayjs from 'dayjs';
import { computed, onUnmounted } from 'vue';

export const useCountDown = () => {
  // 1. 响应式数据
  const time = ref(0)
  let timer = null

  // 格式化时间为多少分多少秒
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

  // 2. 开启倒计时的函数
  const start = (currentTime) => {
    // 开始倒计时逻辑
    /*
      核心逻辑：
        每隔1s减一
    */
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000);
  }

  // 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })

  return {
    formatTime,
    start
  }
}