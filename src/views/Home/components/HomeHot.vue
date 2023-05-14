<script setup>
import { onMounted, ref } from 'vue'
import { getHotAPI } from '@/apis/home.js'
import HomePanel from './HomePanel.vue'

// 新鲜好物
const hotList = ref([])
const getHotList = async () => {
  const { result: res } = await getHotAPI()
  hotList.value = res
}
onMounted(() => {
  getHotList()
})
</script>

<template>
  <HomePanel
    title="人气推荐"
    subTitle="人气爆款 不容错过"
  >
    <ul class="goods-list">
      <li
        v-for="item in hotList"
        :key="item.id"
      >
        <RouterLink to="/">
          <img
            :src="item.picture"
            :alt="item.title"
          />
          <p class="name">{{ item.title }}</p>
          <p class="alt">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>

</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding: 12px;
      padding-bottom: 0;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .alt {
      font-size: 16px;
      color: gray;
    }
  }
}
</style>
