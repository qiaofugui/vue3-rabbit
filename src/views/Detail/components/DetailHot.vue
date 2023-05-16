<script setup>
import { ref, onMounted, computed } from 'vue'
import { getHotGoodsAPI } from '@/apis/detail.js'
import { useRoute } from 'vue-router'
const props = defineProps({
  hotType: {
    type: Number,
    required: true,
  },
})

const route = useRoute()
const hotList = ref({})
const getHotList = async () => {
  const { result: res } = await getHotGoodsAPI({
    id: route.params.id,
    type: props.hotType,
    // page: 1,
  })
  hotList.value = res
}
onMounted(() => {
  getHotList()
})

const TYPEMAP = {
  1: '24小时热榜',
  2: '周日榜单',
}
const title = computed(() => TYPEMAP[props.hotType])
</script>

<template>
  <div class="goods-hot">
    <!-- <h3>{{props.hotType === 1 ? '24小时热榜' : '周日榜单'}}</h3> -->
    <h3>{{title}}</h3>
    <!-- 商品区块 -->
    <RouterLink
      to="/"
      class="goods-item"
      v-for="item in hotList"
      :key="item.id"
    >
      <img
        v-img-lazy="item.picture"
        alt=""
      />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{item.price}}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>