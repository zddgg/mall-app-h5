<template>
  <view id="moreDetail" class="anchor"></view>
  <view class="more_detail">
    <nut-tabs v-model="tab1value" background="#fff" :auto-height="true">
      <nut-tab-pane
          :title="item.title"
          v-for="(item, index) in tabArr"
          :key="index"
          :pane-key="index"
      >
        <view
            v-html="item.content"
            :class="[index !== 0 ? 'table-border' : '', 'iframe-box']"
        ></view>
      </nut-tab-pane>
    </nut-tabs>
  </view>
</template>
<script lang="ts" setup>
import {reactive, ref} from "vue";
import data from "@/mock/moreDetail.json";

const tab1value = ref('0');

const tabArr = ref(
    [
      {
        title: "商品介绍",
        content: data.skuBigField.wdis,
      },
      {
        title: "规格参数",
        content: data.skuBigField.propCode
      },
      {
        title: "售后保障",
        content: data.skuBigField.wareQD
      },
    ]
)

const originData = ref(data);

</script>
<style lang="scss">
.more_detail {
  background-color: #fff;
  border-radius: 12px;
  margin-top: 12px;
  padding: 12px 0px;
  position: relative;

  image {
    width: 100%;
    height: 100%;
  }

  .nut-tabpane {
    padding: 0px;

    img {
      max-width: 100%;
    }

    .iframe-box {
      padding: 10px 0px;
      font-size: 12px;
      background-color: #fff;
      min-height: 80vh;

      body {
        background-color: #fff;
      }
    }

    .table-border {
      padding: 10px;

      .Ptable {
        border: solid 1px #e7e7e7;
        color: #868489;

        td,
        th {
          padding: 10px;
          border-top: solid 1px #e7e7e7;
          border-right: solid 1px #e7e7e7;
        }
      }
    }
  }
}
</style>
