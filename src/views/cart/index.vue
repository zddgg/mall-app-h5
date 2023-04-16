<template>
  <div class="cart">
    <div class="cart-header">
      <div>
        <span style="font-size: 16px; font-weight: bold">购物车</span>
        <span style="margin-left: 4px; border-radius: 14px ;background-color: #e8e8e8; padding: 0 4px"
              @click="showAddressSelect = true">
            <van-icon name="location-o" :size="12"/>
            <span style="font-size: 12px; color: #888888;">上海市浦东新区御水路199弄1103</span>
          </span>
      </div>
      <div class="comment-bottom-right">
        <div class="comment-bottom-right-item">
          <span style="font-size: 14px; font-weight: 500; margin-right: 15px">编辑</span>
        </div>
        <div class="comment-bottom-right-item">
          <van-icon name="ellipsis" :size="20"/>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in cartDataList" :key="index">
      <cart-store-card :cart-store-info="item"></cart-store-card>
    </div>
  </div>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" style="margin-bottom: 6vh">
    <nut-checkbox icon-size="20px" v-model:model-value="storeSelected">全选</nut-checkbox>
    <template v-if="false" #tip>
      你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
    </template>
  </van-submit-bar>
  <TabBar :active-bar="2"/>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import TabBar from '@/components/TabBar/index.vue'
import {useRouter} from "vue-router";
import CartStoreCard from "@/views/cart/components/cartStoreCard.vue";
import {CartStoreInfo, getCartList} from "@/api/cart/cart";

const router = useRouter();
const storeSelected = ref(false);
const value = ref(1);
const showAddressSelect = ref(false);

const cartDataList = ref<CartStoreInfo[]>([])

const onClickLink = () => {
  console.log('优惠信息');
};

const onSubmit = () => {
  router.push({name: 'OrderSubmit'})
};

const queryCartList = async () => {
  const {data} = await getCartList();
  console.log(data)
  cartDataList.value = data;
}

onMounted(() => {
  queryCartList();
})
</script>

<style scoped>
.cart {
  height: calc(100vh - 6vh - 6vh);
  overflow-y: scroll;
  scrollbar-width: none;
}

.cart::-webkit-scrollbar {
  display: none;
}

.cart-header {
  margin: 10px 15px 0;
  height: 60px;
  line-height: 60px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.comment-bottom-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #000;
}

.comment-bottom-right-item {
  position: relative;
  display: flex;
  align-items: center;
}

.cart-store-card {
  margin: 10px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 15px;
}

.store-card-header {
  height: 20px;
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.store-card-header-title {
  display: flex;
  align-items: center;
  height: 20px;
  line-height: 20px;
}

.store-card-header-tag {
}

.colon {
  display: inline-block;
  margin: 0 4px;
  color: #fb4636;
}

.block {
  display: inline-block;
  width: 22px;
  color: #fb4636;
  font-size: 12px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 5px;
}
</style>