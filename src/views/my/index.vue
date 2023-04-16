<template>
  <div style="margin-bottom: 6vh; padding: .8rem">
    <div class="avatar-card" style="display: flex; height: 60px">
      <div class="avatar-card-left">
        <nut-avatar size="large">
          <nut-image :src="loginState ? userInfo.avatar : defImg"/>
        </nut-avatar>
      </div>
      <div v-if="!loginState" class="avatar-card-right" style="height: 60px; line-height: 60px; margin-left: .8rem">
        <span @click="router.push({name: 'Login'})">登录/注册</span>
      </div>
      <div v-if="loginState" class="avatar-card-right" style="height: 60px; line-height: 60px; margin-left: .8rem">
        <span>{{ userInfo.username }}</span>
      </div>
    </div>
    <div class="order-card" style="background-color: #ffffff; border-radius: .8rem; margin-top: 1rem">
      <van-grid :column-num="5" :border="false">
        <van-grid-item icon="credit-pay" text="待付款" :badge="1"/>
        <van-grid-item icon="gift-o" text="待收货" :badge="2"/>
        <van-grid-item icon="star-o" text="待评价" :badge="2"/>
        <van-grid-item icon="replay" text="退换/售后" :badge="2"/>
        <van-grid-item icon="orders-o" text="我的订单" :badge="2"/>
      </van-grid>
    </div>
    <div style="text-align: center; margin-top: 1rem">
      <nut-button v-if="loginState" round type="danger" @click="handleLogout">退出登录</nut-button>
    </div>
    <div style="text-align: center; margin-top: 1rem">
      <nut-button round type="danger" @click="showSkuAction = true">ShowSku</nut-button>
    </div>
  </div>
  <sku-action
      :show="showSkuAction"
      :sku="data.sku"
      :goods="data.goods"
      :btnOptions="['buy', 'cart']"
      @selectSku="selectSku"
      @clickBtnOperate="clickBtnOperate"
      @close="close"
  >
  </sku-action>
  <TabBar :active-bar="3"/>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import TabBar from '@/components/TabBar/index.vue'
import router from "@/router";
import {useUserStore} from "@/store";
import SkuAction from '@/components/SkuAction/index.vue'

const skuActionClosed = () => {
  console.log('skuActionClosed')
}

const userStore = useUserStore();

const showSkuAction = ref(false);

const userInfoStr = localStorage.getItem('user-info');
const userInfo = JSON.parse(userInfoStr ?? '{}');
const loginState = ref<Boolean>(!!userInfo.userId)

const defImg = 'https://pic1.zhimg.com/v2-01ae85e61262724d905e5b35719da064_r.jpg?source=1940ef5c';

const handleLogout = () => {
  loginState.value = false;
  userStore.logout()
}

onMounted(() => {
  fetch('https://storage.360buyimg.com/nutui/3x/data.js')
      .then((response) => response.json())
      .then((res) => {
        const {Sku, Goods, imagePathMap} = res;
        data.sku = Sku;
        console.log(Goods)
        data.goods = Goods;
      }) //执行结果是 resolve就调用then方法
      .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
});
// 底部操作按钮触发
const clickBtnOperate = (op: string) => {
  console.log('点击了操作按钮', op)
}
// 关闭商品规格弹框
const close = () => {
  showSkuAction.value = false;
}

const data = reactive({
  sku: [],
  goods: {}
});

// 切换规格类目
const selectSku = (ss: string) => {
  const {sku, skuIndex, parentSku, parentIndex} = ss;
  if (sku.disable) return false;
  data.sku[parentIndex].list.forEach((s) => {
    s.active = s.id == sku.id;
  });
  data.goods = {
    skuId: sku.id,
    price: '6002.10',
    imagePath:
        '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'
  };
};

</script>

<style scoped>
</style>