<template>
  <div class="home" style="margin-bottom: 6vh">
    <van-sticky>
      <searchbar-box @focus="router.push({name: 'Search'})"></searchbar-box>
    </van-sticky>
    <nav-box></nav-box>
    <banner-box></banner-box>
    <quick-enter-box></quick-enter-box>

    <div style="padding: 10px">
      <goods-feed></goods-feed>
    </div>
  </div>
  <TabBar :active-bar="0"/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import TabBar from '@/components/TabBar/index.vue'
import SearchbarBox from '@/views/home/components/searchbarBox.vue';
import NavBox from "@/views/home/components/navBox.vue";
import BannerBox from "@/views/home/components/bannerBox.vue";
import QuickEnterBox from "@/views/home/components/quickEnterBox.vue";
import GoodsFeed from "@/views/home/components/goodsFeed.vue";
import router from "@/router";

const goodInfo = ref({
  goodsName: '美的（Midea）电磁炉 410mm大面板 电磁灶 家用大功率 十档火力 C21-WT2112T（配欧式汤锅+渗氮炒锅）',
  goodsImg: '//img14.360buyimg.com/mobilecms/s360x360_jfs/t1/220257/16/25655/174186/642ed4caF1c03e01b/03ae79e8a2b8f585.jpg!q70.dpg.webp',
})

</script>

<style lang="scss" scoped>
.home {
  --van-grid-item-content-padding: 4px
}

</style>