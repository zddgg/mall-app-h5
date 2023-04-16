<template>
  <div style="margin-bottom: 8vh">
    <!--  订单提交页head  -->
    <van-nav-bar title="填写订单" @clickLeft="router.back()">
      <template #left>
        返回
      </template>
    </van-nav-bar>

    <!--  地址信息  -->
    <nut-address-list
        :data="data"
        long-press
        :show-bottom-button="false"
        @del-icon="delClick"
        @edit-icon="editClick"
        @click-item="clickItem"
        @long-copy="copyClick"
        @long-set="setClick"
        @long-del="delClickLong"
        :data-options="dataOptions"
    >
    </nut-address-list>

    <!--  店铺商品信息  -->
    <store-goods-box v-for="i in 3"></store-goods-box>

    <!--  价格信息  -->
    <price-box></price-box>

    <!--  支付信息  -->
    <pay-box></pay-box>

  </div>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" style="height: 6vh"/>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {showToast} from "vant";
import StoreGoodsBox from "@/views/order/submit/components/storeGoodsBox.vue";
import PriceBox from "@/views/order/submit/components/priceBox.vue";
import PayBox from "@/views/order/submit/components/payBox.vue";

const router = useRouter();

const data = ref([
  {
    testid: 4,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  },
]);
const dataOptions = reactive({
  id: 'testid',
  addressDetail: 'testaddressDetail',
  addressName: 'testaddressName'
});
const clickItem = () => {
  console.log('Click To Address');
}
const delClick = () => {
  console.log('Click To Delete');
}
const editClick = () => {
  console.log('Click To Edit');
}
const copyClick = () => {
  console.log('Click To Copy');
}
const setClick = () => {
  console.log('Click On Settings');
}
const delClickLong = () => {
  console.log('Click To Add');
}
const onSubmit = () => showToast('点击按钮');

</script>

<style scoped>

</style>