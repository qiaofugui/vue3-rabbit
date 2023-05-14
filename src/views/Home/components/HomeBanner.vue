<script setup>
import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

// 轮播图
const bannerList = ref([])
const getBanner = async () => {
  const { result: res } = await getBannerAPI()
  bannerList.value = res
}
onMounted(() => {
  getBanner()
})

</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item
        v-for="item in bannerList"
        :key="item.id"
      >
        <img v-img-lazy="item.imgUrl">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>