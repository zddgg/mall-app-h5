<template>
  <div class="category">
    <van-sticky>
      <van-nav-bar title="分类" left-arrow style="height: 6vh">
        <template #right>
          <van-icon name="search" size="20" @click="router.push({name: 'Search'})"/>
        </template>
      </van-nav-bar>
    </van-sticky>
    <div class="category-body">
      <div class="category-tab">
        <van-sidebar v-model="currentLv1Index" @change="currentLv2Index=0">
          <van-sidebar-item
              :title="item.categoryName"
              v-for="(item, index) in categoryTrees"
              :key="index"
          />
        </van-sidebar>
      </div>
      <div class="category-content">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="image in swipeImagesData" :key="image">
            <van-image :src="image" alt=""/>
          </van-swipe-item>
        </van-swipe>
        <van-tabs :active="currentLv2Index"
                  scrollspy
                  sticky
                  :ellipsis="false"
                  :offset-top="'6vh'">
          <van-tab
              :title="item.categoryName"
              v-for="(item, index) in categoryTrees[currentLv1Index]?.children"
              :key="index"
          >
            <div style="font-weight: bold; font-size: 16px; margin: 10px 0 0 8px">
              <span>{{ item.categoryName }}</span>
            </div>
            <div class="category-lv3-item">
              <van-grid :column-num="3" :border="false">
                <van-grid-item v-for="(subItem, subIndex) in item?.children" :key="subIndex">
                  <div>
                    <van-image
                        src="//img13.360buyimg.com/focus/s140x140_jfs/t11209/197/2422417970/2811/d167e855/5a17f1edN56abbe6e.jpg"
                        :height="60"
                        :width="60"
                    />
                  </div>
                  <div style="font-size: 12px">
                  <span>
                    {{ subItem.categoryName }}
                  </span>
                  </div>
                </van-grid-item>
              </van-grid>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div>
      <tab-bar :active-bar="1"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import TabBar from '@/components/TabBar/index.vue';
import {useRouter} from "vue-router";
import {swipeImagesData} from "@/mock/mock";
import {BackendCategoryTree, queryCategoryTree} from "@/api/product/category";

const router = useRouter();

const currentLv1Index = ref(0);
const currentLv2Index = ref(0);

const categoryTrees = ref<BackendCategoryTree[]>([]);
const getCategoryTrees = async () => {
  const {data} = await queryCategoryTree()
  categoryTrees.value = data;
}

onMounted(() => {
  getCategoryTrees();
})

</script>

<style lang="scss" scoped>
.category {
  --van-nav-bar-icon-color: #000000
}

.category-body {
  overflow: hidden;
  display: flex;
  height: calc(86vh);
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  margin-bottom: 6vh;
}

.category-tab {
  overflow: auto;
  width: 25%;
  background-color: #ffffff;
}

.category-tab::-webkit-scrollbar {
  display: none;
}

.category-content {
  overflow: auto;
  width: 75%;
  background-color: #ffffff;
}

.category-content::-webkit-scrollbar {
  display: none;
}

.category-lv3-item {
  --van-grid-item-content-padding: 6px
}
</style>
