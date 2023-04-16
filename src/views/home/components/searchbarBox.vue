<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:leftin>
      <Search2 color="#fa2c19"/>
    </template>
    <template v-slot:rightin>
      <Photograph width="20" height="20"/>
      <nut-divider direction="vertical"/>
      <Scan2 width="20" height="20" style="margin-right: .2rem"/>
    </template>
  </nut-searchbar>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {Photograph, Scan2, Search2} from '@nutui/icons-vue';

const router = useRouter();
const searchValue = ref('');
</script>

<style scoped>

</style>