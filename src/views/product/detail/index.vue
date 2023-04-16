<template>
  <div style="margin-bottom: 6vh">
    <!-- 顶部导航 -->
    <top-nav></top-nav>
    <!-- 商品基本信息 -->
    <goods-info></goods-info>
    <!-- 商品属性组 -->
    <goods-attr-group></goods-attr-group>
    <!-- 用户交互 -->
    <user-interaction></user-interaction>
    <!-- 推荐列表 -->
    <!--  <recommend-list></recommend-list>-->
    <!-- 商品详情 -->
    <more-detail></more-detail>
  </div>
  <!-- 底部操作 -->
  <detail-footer></detail-footer>
</template>

<script lang="ts" setup>
import TopNav from "@/views/product/detail/components/topNav.vue";
import GoodsInfo from "@/views/home/components/goodsInfo.vue";
import MoreDetail from "@/views/product/detail/components/moreDetail.vue";
import DetailFooter from "@/views/product/detail/components/detailFooter.vue";
import GoodsAttrGroup from "@/views/product/detail/components/goodsAttrGroup.vue";
import UserInteraction from "@/views/product/detail/components/userInteraction.vue";
</script>

<style scoped>
</style>