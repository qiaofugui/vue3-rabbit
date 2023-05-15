<script setup>
import { getCategoryFilterAPI } from '@/apis/category.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

// 获取面包屑导航数据
const route = useRoute()
const categoryData = ref([])
const getCategoryData = async () => {
  const { result: res } = await getCategoryFilterAPI(route.params.id)
  categoryData.value = res
}
onMounted(() => {
  getCategoryData()
})

// 获取基础数据列表渲染
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
import { getSubCategoryAPI } from '@/apis/category.js'
const goodsList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime',
})
const getGoodsList = async () => {
  const { result: res } = await getSubCategoryAPI(reqData)
  goodsList.value = res
  console.log(res)
}
onMounted(() => {
  getGoodsList()
})

const handleClick = (pane) => {
  reqData.value.sortField = pane.props.name
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="`/category/${categoryData.parentId}`">{{categoryData.parentName}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="`/category/sub/${categoryData.id}`">{{categoryData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs
        type="card"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="最新商品"
          name="publishTime"
        ></el-tab-pane>
        <el-tab-pane
          label="最高人气"
          name="orderNum"
        ></el-tab-pane>
        <el-tab-pane
          label="评论最多"
          name="evaluateNum"
        ></el-tab-pane>
      </el-tabs>
      <div class="body">
        <!-- 商品列表-->
        <GoodsItem
          v-for="good in goodsList.items"
          :key="good.id"
          :good="good"
        />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>