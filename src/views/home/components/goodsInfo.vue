<template>
  <div class="goods-info">
    <nut-swiper
        pagination-color="#426543"
        auto-play="0"
        @change="change"
        height="375"
    >
      <nut-swiper-item v-for="(banner, index) in state.banners" :key="index">
        <img class="goods-swiper-img" :src="state.imgUrlHeader + banner" alt=""/>
      </nut-swiper-item>
      <template v-slot:page>
        <div class="page">{{ state.current }}/{{ state.banners.length }}</div>
      </template>
    </nut-swiper>
    <div class="base-info" style="padding: .6rem">
      <div>
        <span style="color: #fb4838; margin-right: .4rem">预估到手</span>
        <nut-price
            :price="10010.01"
            :need-symbol="true"
            size="large"
            :thousands="false"
        />
      </div>
      <div style="display:flex; justify-content: space-between; margin-top: .4rem">
        <div>
          <nut-tag color="#FA685D">
            <span style="font-size: .8rem">
              满200减8
            </span>
          </nut-tag>
        </div>
        <div>
          <nut-tag round type="danger" style="padding: 0 .4rem">
            <span style="font-size: .8rem">
              优惠
            </span>
            <icon-font name="right"></icon-font>
          </nut-tag>
        </div>
      </div>
      <div style="margin-top: .4rem">
        <span>华为/HUAWEI P50 Pro 原色双影像单元 万象双环设计 基于鸿蒙操作系统支持66W快充 8GB+256GB雪域白华为手机</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";
import {IconFont} from "@nutui/icons-vue";

const state = reactive({
  imgUrlHeader: "https://img14.360buyimg.com/imagetools/s750x750_",
  banners: [
    "jfs/t1/206758/31/20375/94472/6253d30eE4a8c6628/71720ac9bc6ccb0d.jpg",
    "jfs/t1/122521/21/24398/158888/6253d301E37ff8a4e/995e544c1734bfed.jpg",
    "jfs/t1/151136/20/22073/104590/625d3c50E07cffc17/e72f0431b59da28d.jpg",
    "jfs/t1/205426/36/20757/148058/625d3c50E51fa17ed/dfb3f9c22984f568.jpg",
    "jfs/t1/97400/32/28216/121021/625d3c50E330600ce/e1b841465f63aedb.jpg",
    "jfs/t1/155358/33/21706/117843/625d3c50Ec373678d/ebcff7b25ff9dd41.jpg",
  ],
  current: 1,
});
const change = (index: number) => {
  state.current = index + 1;
};
</script>

<style lang="scss" scoped>
.goods-info {
  width: 100%;
  background: #fff;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 0 0 0 #ececee;

  .page {
    position: absolute;
    bottom: 20px;
    right: 0;
    width: 46px;
    height: 22px;
    background: rgba(0, 0, 0, 0.33);
    border-radius: 22px 0 0 22px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }

  .goods-swiper-img {
    width: 100%;
    height: 100%;
  }
}
</style>