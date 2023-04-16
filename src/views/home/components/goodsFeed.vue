<template>
<!--  <van-row :gutter="10" v-for="(item, index) in skuFeeds" :key="index">-->
<!--    <van-col :span="12" v-for="i in 2">-->
<!--      <div @click="jumpToSkuDetail(item.skuId)">-->
<!--        <van-image :src="item.thumbnail"/>-->
<!--        <van-text-ellipsis-->
<!--            rows="2"-->
<!--            :content="item.skuName"-->
<!--            style="font-size: .8rem"-->
<!--        />-->
<!--        <div style="display: flex; height: 1rem; line-height: 1rem">-->
<!--          <nut-price :price="item.retailPrice" size="normal" :need-symbol="true"/>-->
<!--          <div style="margin-left: .5rem">-->
<!--            <van-tag type="danger">到手价</van-tag>-->
<!--          </div>-->
<!--        </div>-->
<!--        <nut-price style="color: #8c8c8c" :price="45.23" size="small" :need-symbol="true"/>-->
<!--      </div>-->
<!--    </van-col>-->
<!--  </van-row>-->
  <div v-for="(item, index) in skuFeeds" :key="index" style="margin-bottom: 20px">
    <nut-card
        :img-url="item.thumbnail"
        :title="item.skuName"
        :price="item.retailPrice + ''"
        :vipPrice="item.retailPrice + ''"
        :shopDesc="state.shopDesc"
        :delivery="state.delivery"
        :shopName="state.shopName"
        @click="jumpToSkuDetail(item.skuId)"
    >
      <template #prolist>
        <div class="search_prolist_attr">
          <span class="word">活鲜</span>
          <span class="word">礼盒</span>
          <span class="word">国产</span>
        </div>
      </template>

    </nut-card>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {querySkuFeed, SkuFeed} from "@/api/product/goods";

const router = useRouter();

const skuFeeds = ref<SkuFeed[]>([]);

onMounted(() => {
  getSkuFeed();
})

const getSkuFeed = async () => {
  const {data} = await querySkuFeed()
  skuFeeds.value = data;
}

const jumpToSkuDetail = (skuId: string) => {
  router.push({
    name: 'ProductDetail',
    params: {
      skuId: skuId
    }
  })
}

const state = reactive({
  imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
});

</script>

<style lang="scss" scoped>
.search_prolist_attr {
  margin: 3px 0 1px;
  height: 15px;
  overflow: hidden;
  > span {
    float: left;
    padding: 0 5px;
    border-radius: 1px;
    font-size: 10px;
    height: 15px;
    line-height: 15px;
    color: #999;
    background-color: #f2f2f7;
    margin-right: 5px;
  }
}
</style>