<template>
  <div>
    <nut-searchbar v-model="searchValue">
      <template v-slot:leftout>
        <Left @click="router.back()"/>
      </template>
      <template v-slot:rightin>
        <Photograph/>
      </template>
      <template v-slot:rightout>
        搜索
      </template>
    </nut-searchbar>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {Left, Photograph} from '@nutui/icons-vue';
import {useRouter} from "vue-router";

const router = useRouter();
const searchValue = ref('');
</script>

<style scoped>

</style>