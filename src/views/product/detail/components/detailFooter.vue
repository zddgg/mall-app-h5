<template>
  <van-action-bar style="height: 6vh">
    <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24"/>
    <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        @click="router.push({name: 'Cart'})"
    />
    <van-action-bar-icon
        icon="star"
        text="已收藏"
        color="#ff5000"
    />
    <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="openSkuSelection"
    />
    <van-action-bar-button type="danger" text="立即购买"/>
  </van-action-bar>
</template>

<script lang="ts" setup>

import {useRouter} from "vue-router";

const router = useRouter();

const emits = defineEmits(
    ['openSkuSelection']
)

const openSkuSelection = () => {
  emits('openSkuSelection')
}

</script>

<style scoped>

</style>