<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" style="height: 6vh">
      <van-tabbar-item icon="home-o" @click="router.push({name: 'Home'})">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" @click="router.push({name: 'Category'})">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" @click="router.push({name: 'Cart'})">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" @click="router.push({name: 'My'})">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts" setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const props = defineProps({
  activeBar: {
    type: Number,
    default: 0
  }
})

const active = ref(props.activeBar)

const router = useRouter();
</script>