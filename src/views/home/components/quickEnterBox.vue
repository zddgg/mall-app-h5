<template>
  <div class="quick-enter-box">
    <van-swipe indicator-color="white" :loop="false">
      <van-swipe-item v-for="i in Math.ceil((homeCategoryCardData.length / 10))" :key="i">
        <van-grid :column-num="5" :border="false" :gutter="4" style="background-color: #ffffff">
          <van-grid-item v-for="(item, index) in homeCategoryCardData.slice((i-1 )* 10, i * 10)" :key="index">
            <van-image
                :src="item.imgUrl"
                style="height: 80%; width: 80%"
            />
            <span style="font-size: .8rem">{{ item.name }}</span>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" setup>
const homeCategoryCardData = []

homeCategoryCardData.push(
    {
      name: '京东超市',
      imgUrl: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
      categoryId: 100001
    },
    {
      name: '数码电器',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      categoryId: 100001
    },
    {
      name: '京东新百货',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
      categoryId: 100001
    },
    {
      name: '京东生鲜',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png',
      categoryId: 100001
    },
    {
      name: '京东到家',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png',
      categoryId: 100001
    },
    {
      name: '充值缴费',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png',
      categoryId: 100001
    },
    {
      name: '附近好店',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/34248/39/16616/4689/62bbbdccE9f11132e/d51caf15f2f412b2.png',
      categoryId: 100001
    },
    {
      name: 'PLUS会员',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png',
      categoryId: 100001
    },
    {
      name: '京东国际',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/191060/24/12861/6818/60ec11f2E67cf5ee6/c264378678b3cd96.png',
      categoryId: 100001
    },
    {
      name: '京东拍卖',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/186882/8/12149/5894/60ec1250E9335241a/b22054613aa8ae75.png',
      categoryId: 100001
    },
    {
      name: '玩3C',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/145692/9/1817/4493/5efbf652E61c4f3ec/722840c121d67fc6.png',
      categoryId: 100001
    },
    {
      name: '沃尔玛',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/185282/10/13877/6658/60ec1404E0fc4061a/a7c213f76e37a8d6.png',
      categoryId: 100001
    },
    {
      name: '美妆馆',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/182378/35/13924/7463/60ec14c6E1f434a60/37fba58239f3547e.png',
      categoryId: 100001
    },
    {
      name: '京东旅行',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/191377/35/12864/5624/60ec146cE304517a9/20acb632f59fbbbd.png',
      categoryId: 100001
    },
    {
      name: '拍拍二手',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/36551/10/16098/5792/60ec1589E755822d7/f958b896e706008a.png',
      categoryId: 100001
    },
    {
      name: '全部',
      imgUrl: '//m15.360buyimg.com/mobilecms/jfs/t1/192665/22/12752/7912/60ec15cbE261a32bf/3ace51badf80e71b.png',
      categoryId: 100001
    },
)

</script>

<style scoped>
.quick-enter-box {
  background-color: #f6f6f6;
}
</style>