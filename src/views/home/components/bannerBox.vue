<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="image in swipeImagesData" :key="image">
      <van-image :src="image" alt=""/>
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts" setup>
const swipeImagesData = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
];
</script>

<style scoped>

</style>