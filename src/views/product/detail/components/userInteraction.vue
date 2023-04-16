<template>
  <div class="user-interaction">
    <van-cell-group inset :border="false">
      <div>
        <van-cell :border="false" is-link>
          <template #title>
            <span style="font-weight: bold">评价 (1000+)</span>
          </template>
          <template #value>
            <span>好评度 99%</span>
          </template>
        </van-cell>
        <div v-for="i in 2" :key="i" style="padding: 0 16px">
          <nut-comment
              :images="cmt.images"
              :videos="cmt.videos"
              :info="cmt.info"
              @click="handleClick"
              @clickImages="clickImages"
              :operation="['replay']"
          >
            <template #comment-labels>
              <img
                  class="nut-comment-header__labels--item"
                  src="https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg"
              />
            </template>
          </nut-comment>
          <van-divider v-show="i !== 2"/>
        </div>
      </div>
    </van-cell-group>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";

let cmt = ref({});
onMounted(() => {
  fetch('//storage.360buyimg.com/nutui/3x/comment_data.json')
      .then((response) => response.json())
      .then((res) => {
        cmt.value = res.Comment;
      })
      .catch((err) => console.log('Oh, error', err));
})
const handleClick = (info: any) => {
  console.log('进行跳转', info);
};
const clickImages = (imgs) => {
  console.log('进行图片展示', imgs)
}
</script>
<style lang="scss" scoped>
.user-interaction {
  --van-cell-group-inset-padding: 0;
}
</style>
