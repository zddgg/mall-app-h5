<template>
  <div>
    <div class="store-card-preferential" style="margin: 10px 0 0 30px">
      <van-tag color="#f9411f" size="14px">
        <span style="font-size: 12px; height: 18px; line-height: 18px">满减</span>
      </van-tag>
      <span style="font-size: 12px; font-weight: bold; margin-left: 4px">
            {{ cartPreferentialInfo?.preferentialTitle }}
      </span>
      <span style="float: right; font-size: 12px; font-weight: bold;height: 18px; line-height: 18px">
            再逛逛
            <van-icon name="arrow"/>
      </span>
    </div>
    <div class="cart-store-card-sku" style="margin-top: 15px"
         v-for="(item, index) in cartPreferentialInfo?.cartSkuInfos" :key="index"
    >
      <van-swipe-cell>
        <div style="display: flex">
          <div class="cart-store-card-sku-image" style="display: flex; height: 100px">
            <nut-checkbox
                icon-size="20px"
                v-model:model-value="item.cartInfo.selected"
                @change="skuSelectChange($event, item)"
            />
            <div>
              <div>
                <van-image
                    :src="item.skuInfo.thumbnail"
                    :height="100"
                    :width="100"
                />
              </div>
              <div style="margin-top: 6px">
                <span style="color: #f9411f;
                              font-size: 14px;
                              font-weight: bold;
                              height: 24px;
                              line-height: 24px"
                >
                  <nut-price :price="item.skuInfo.retailPrice"></nut-price>
                </span>
              </div>
            </div>
          </div>
          <div class="cart-store-card-sku-content" style="margin-left: 10px"
               @click="jumpToSkuDetail(item.skuInfo.skuId)"
          >
            <div class="van-multi-ellipsis--l2" style="font-size: 12px; font-weight: 500; letter-spacing: 1px">
              <span>
                {{ item.skuInfo.skuName }}
              </span>
            </div>
            <div class="van-multi-ellipsis--l1" style="margin-top: 10px">
              <span style="border-radius: 14px ;background-color: #e8e8e8; padding: 0 4px" @click="showSku = true">
                <span style="font-size: 12px; color: #888888">
                  {{ item.skuInfo.attrStr }}
                </span>
                <van-icon name="arrow-down" :size="12" style="margin-left: 2px"/>
              </span>
            </div>
            <div style="margin-top: 10px">
              <van-tag round color="#f9411f">
                <span>
                  京东超市
                </span>
              </van-tag>
              <van-tag plain type="danger" style="margin-left: 4px">
                <span>
                  15天保价
                </span>
              </van-tag>
            </div>
            <div style="margin-top: 10px">
              <van-tag round type="danger"
                       style="width: 100%; background: linear-gradient(90deg, #fee0e3, #fffefe 100%);">
                <span style="color: red; font-weight: bold">
                  秒杀
                </span>
                <span style="color: red; font-weight: bold; margin-left: 4px">
                  距结束还剩
                </span>
                <van-count-down :time="time" style="margin-left: 4px">
                  <template #default="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                  </template>
                </van-count-down>
              </van-tag>
            </div>
            <div style="margin-top: 10px; display: flex; justify-content: space-between; height: 24px">
              <div>
                <span style="font-size: 12px; color: red; height: 24px; line-height: 24px">限购2件</span>
              </div>
              <div style="float: right">
                <van-stepper input-width="32px"
                             button-size="24px"
                             style="margin-left: 4px"
                             v-model="item.cartInfo.skuNum"
                             @plus="skuNumChange(item.cartInfo.cartId, '1')"
                             @minus="skuNumChange(item.cartInfo.cartId, '0')"
                             @overlimit="overLimit"
                             disable-input
                />
              </div>
            </div>
          </div>
        </div>
        <template #right>
          <van-button square text="删除" type="danger" style="height: 100%;"
                      @click="skuCartDelete(item.cartInfo.cartId)"
          />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {CartDeleteReq, CartPreferentialInfo, CartSelectReq, CartSkuInfo, SkuNumUpdateReq} from "@/api/cart/cart";

const router = useRouter();
const time = ref(24 * 60 * 60 * 1000);
const value = ref(1);
const showSku = ref(false);


defineProps({
  cartPreferentialInfo: {
    type: Object as () => CartPreferentialInfo
  }
})

const emits = defineEmits(
    ['skuSelectChange', 'skuNumChange', 'skuCartDelete']
)

const skuSelectChange = (state: boolean, cartSkuInfo: CartSkuInfo) => {
  const params: CartSelectReq = {
    actionType: state ? '1' : '0',
    cartIds: [cartSkuInfo.cartInfo.cartId]
  };
  emits('skuSelectChange', params);
}

const skuNumChange = (cartId: string, actionType: string) => {
  const params: SkuNumUpdateReq = {
    actionType: actionType,
    cartId: cartId,
  }
  emits('skuNumChange', params)
  window.event?.stopPropagation();
}

const skuCartDelete = (cartId: string) => {
  const params: CartDeleteReq = {
    cartId: cartId,
  }
  emits('skuCartDelete', params)
}

const jumpToSkuDetail = (skuId: string) => {
  router.push({
    name: 'ProductDetail',
    params: {
      skuId: skuId
    }
  })
}

const overLimit = () => {
  window.event?.stopPropagation()
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