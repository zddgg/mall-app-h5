<template>
  <div class="nav-box">
    <van-tabs :active="active">
      <van-tab v-for="(item, index) in categoryTrees?.slice(1)"
               :key="index"
               :title="item.categoryName">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {BackendCategoryTree, queryCategoryTree} from "@/api/product/category";

const active = ref(0);

const categoryTrees = ref<BackendCategoryTree[]>([]);
const getCategoryTrees = async () => {
  const {data} = await queryCategoryTree()
  categoryTrees.value = data;
}

onMounted(() => {
  getCategoryTrees();
})

</script>

<style scoped>
.nav-box {
  --van-tabs-bottom-bar-width: 0;
  --van-tabs-bottom-bar-height: 0;
}
</style>