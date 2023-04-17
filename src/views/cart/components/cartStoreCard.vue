<template>
  <div class="cart-store-card">
    <div class="store-card-header">
      <div class="store-card-header-title">
        <nut-checkbox
            icon-size="20px"
            :model-value="computedStoreSelected"
            @change="storeSelectChange($event, props.cartStoreInfo)"
        />
        <span style="line-height: 20px; font-size: 14px; font-weight: bold">
          {{ cartStoreInfo?.storeName }}
        </span>
        <van-icon name="arrow" size="10px"/>
      </div>
      <div class="store-card-header-tag">
            <span style="font-size: 12px; margin-left: 4px">
              <van-icon name="warning-o" size="12px"/>
              已免运费
            </span>
        <van-tag round color="#f9411f" style="font-size: 12px; margin-left: 4px">
          <span>优惠券</span>
        </van-tag>
      </div>
    </div>
    <div v-for="(item, index) in cartStoreInfo?.cartPreferentialInfos" :key="item.preferentialId">
      <cart-store-preferential-card :cart-preferential-info="item"
                                    @skuSelectChange="skuSelectChange"
                                    @skuNumChange="skuNumChange"
      >
      </cart-store-preferential-card>
      <van-divider v-if="index !== cartStoreInfo?.cartPreferentialInfos.length - 1"></van-divider>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import CartStorePreferentialCard from "@/views/cart/components/cartStorePreferentialCard.vue";
import {CartSelectReq, CartStoreInfo, SkuNumUpdateReq} from "@/api/cart/cart";

const router = useRouter();
const value = ref(1);

const props = defineProps({
  cartStoreInfo: {
    type: Object as () => CartStoreInfo
  }
})


const emits = defineEmits(
    ['cartSelectChange', 'skuNumChange']
)

const computedStoreSelected = computed(() => {
  return !props.cartStoreInfo?.cartPreferentialInfos
      .find((item) => item.cartSkuInfos
          .find((subItem) => !subItem.cartInfo.selected));
})

const storeSelectChange = (state: boolean, cartStoreInfo: CartStoreInfo) => {
  let cartIds: string[] = [];
  cartStoreInfo.cartPreferentialInfos.forEach((item) => {
    item.cartSkuInfos.forEach((subItem) => {
      cartIds.push(subItem.cartInfo.cartId)
    })
  })

  const params: CartSelectReq = {
    actionType: state ? '1' : '0',
    cartIds: cartIds
  }
  emits('cartSelectChange', params);
}

const skuSelectChange = (params: CartSelectReq) => {
  emits('cartSelectChange', params);
}

const skuNumChange = (params: SkuNumUpdateReq) => {
  emits('skuNumChange', params);
}


</script>

<style scoped>

.cart {
  height: calc(94vh);
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