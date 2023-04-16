<template>
  <div class="top-nav " :class="[showTab ? 'scroll_in' : '']">
    <nut-navbar @on-click-back="router.back()">
      <template #left>
        <div>返回</div>
      </template>
      <template #content>
        <nut-tabs v-model="tab2value" @click="changeTabList">
          <nut-tab-pane v-for="item in tabArr" :title="item.name"/>
        </nut-tabs>
      </template>
      <template #right>
        <HorizontalN class="right" width="16px"></HorizontalN>
      </template>
    </nut-navbar>
<!--        <van-nav-bar>-->
<!--          <template #left>-->
<!--            <div>返回</div>-->
<!--          </template>-->
<!--          <template #title>-->
<!--            <van-tabs :active="tab2value">-->
<!--              <van-tab v-for="item in tabArr" :title="item.name">-->
<!--              </van-tab>-->
<!--            </van-tabs>-->
<!--          </template>-->
<!--          <template #right>-->
<!--            <van-icon name="search" size="18"/>-->
<!--          </template>-->
<!--        </van-nav-bar>-->
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {HorizontalN} from '@nutui/icons-vue'
import {useRouter} from "vue-router";

const router = useRouter();

const showTab = ref(false);
const tabArr = ref([
  {name: "商品", selector: "#goodsInfo"},
  {name: "评价", selector: "#goodsComment"},
  {name: "详情", selector: "#moreDetail"},
  {name: "推荐", selector: "#recommendList"},
]);
const targetRect = ref({
  goodsInfo: "",
  goodsComment: "",
  moreDetail: "",
  recommendList: "",
});
const tabValue = ref("0");
const appH = ref(0);
const flag = ref(false);
const tab2value = ref(0);

const back = () => {
  alert('Click Back');
}

const changeTabList = (tab: any) => {
  tab2value.value = tab.paneKey as number;

}
</script>
<style lang="scss" scoped>
.top-nav {
  --nut-navbar-margin-bottom: 0
}
</style>