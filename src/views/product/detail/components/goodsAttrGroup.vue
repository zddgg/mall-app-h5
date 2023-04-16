<template>
  <div class="goods-attr-group">
    <van-cell-group inset :border="false">
      <van-cell class="custom-cell"
                is-link
                :border="false"
                @click="showSku = true">
        <template #title>
          选择
        </template>
        <template #value>
            <span style="color:#000;">
              {{ skuName }}
            </span>
        </template>
      </van-cell>
      <van-cell class="custom-cell"
                is-link
                :border="false"
                @click="showAddressSelect = true">
        <template #title>
          送至
        </template>
        <template #value>
            <span style="color:#000;">
              {{ text }}
            </span>
        </template>
      </van-cell>
      <van-cell class="custom-cell"
                is-link
                :border="false"
                @click="showAddressSelect = true">
        <template #title>
          活动
        </template>
        <template #value>
          <van-tag type="danger">店铺特惠</van-tag>
          <van-tag type="primary" style="margin-left: 10px">高价回收</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
    <sku-action
        :show="showSku"
        :sku="skuData.sku"
        :goods="skuData.goods"
        :btnOptions="['buy', 'cart']"
        @selectSku="selectSku"
        @clickBtnOperate="clickBtnOperate"
        @close="showSkuClose"
    >
    </sku-action>
    <nut-address
        :visible="showAddressSelect"
        type="exist"
        :exist-address="existAddress"
        :province="address.province"
        :city="address.city"
        :country="address.country"
        :town="address.town"
        @close="close"
        @selected="selected"
        custom-and-exist-title="选择其他地址"
        @switch-module="switchModule"
        @close-mask="closeMask"
        @change='onChange'
    ></nut-address>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {skuData} from "@/mock/mock";
import {Goods, querySkuAttrOptions, SkuAttrMap, SkuAttrOption} from "@/api/product/goods";
import SkuAction from '@/components/SkuAction/index.vue'
import {useRoute} from "vue-router";
import {addCart} from "@/api/cart/cart";

const route = useRoute();

const skuName = ref('已选择：亮黑色，8GB+128GB，4G（有充版）');
const showSku = ref(false);

const showAddressSelect = ref(false);

const {skuId} = route.params;

const skuData = reactive<{
  sku: SkuAttrOption[],
  goods: Goods,
  skuAttrMaps: SkuAttrMap[],
}>({
  sku: [],
  goods: {} as Goods,
  skuAttrMaps: [],
});

// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{text: '杭州市', value: '330100'}],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{text: '南京市', value: '320100'}],
  },
];

const getSkuAttrOptions = async (skuId: string) => {
  console.log(skuId)
  const {data} = await querySkuAttrOptions({skuId})
  skuData.sku = data.skuAttrOptions;
  skuData.goods = data.goods
  skuData.skuAttrMaps = data.skuAttrMaps
}

onMounted(() => {
  getSkuAttrOptions(skuId as string);
});

// 切换规格类目
const selectSku = (ss: string) => {
  const {attrItem, index, parentItem, parentIndex} = ss;
  if (attrItem.disable) return false;
  skuData.sku[parentIndex].list.forEach((s) => {
    s.active = s.id == attrItem.id;
  });

  const attrIdArr: string[] = [];
  const attrValueIdArr: string[] = [];
  skuData.sku.forEach(item => {
    item.list.forEach(subItem => {
      if (subItem.active) {
        attrIdArr.push(item.id)
        attrValueIdArr.push(subItem.id)
      }
    })
  })

  for (let i = 0; i < skuData.skuAttrMaps.length; i++) {
    let tmp: boolean = true;
    for (let j = 0; j < attrIdArr.length; j++) {
      if (skuData.skuAttrMaps[i].attrMap[attrIdArr[j]] !== attrValueIdArr[j]) {
        tmp = false;
      }
    }
    if (tmp) {
      getSkuAttrOptions(skuData.skuAttrMaps[i].skuId)
    }
  }

};
// 底部操作按钮触发
const clickBtnOperate = async (op: { type: string, value: number }) => {
  console.log('点击了操作按钮', op)
  if (op.type === 'buy') {

  }
  if (op.type === 'cart') {
    await addCart({skuId: skuData.goods.skuId, skuNum: op.value});
  }
  showSkuClose();
}
// 关闭商品规格弹框
const showSkuClose = () => {
  showSku.value = false
}

const address = reactive({
  province: [
    {id: 1, name: '北京'},
    {id: 2, name: '广西'},
    {id: 3, name: '江西'},
    {id: 4, name: '四川'}
  ],
  city: [
    {id: 7, name: '朝阳区'},
    {id: 8, name: '崇文区'},
    {id: 9, name: '昌平区'},
    {id: 6, name: '石景山区'}
  ],
  country: [
    {id: 3, name: '八里庄街道'},
    {id: 9, name: '北苑'},
    {id: 4, name: '常营乡'}
  ],
  town: []
})
const existAddress = ref([
  {
    id: 1,
    addressDetail: '',
    cityName: '次渠镇',
    countyName: '通州区',
    provinceName: '北京市',
    selectedAddress: true,
    townName: '',
    name: '探探鱼',
    phone: '182****1718'
  },
  {
    id: 2,
    addressDetail: '',
    cityName: '钓鱼岛全区',
    countyName: '',
    provinceName: '钓鱼岛',
    selectedAddress: false,
    townName: '',
    name: '探探鱼',
    phone: '182****1718'
  },
  {
    id: 3,
    addressDetail: '京东大厦',
    cityName: '大兴区',
    countyName: '科创十一街18号院',
    provinceName: '北京市',
    selectedAddress: false,
    townName: '',
    name: '探探鱼',
    phone: '182****1718'
  }
]);
const backBtnIcon = ref('left')
const text = ref('选择地址')

const showAddressOther = () => {
  showAddressSelect.value = true;
};

const close = val => {
  if (val.type == 'exist') {
    const {provinceName, cityName, countyName, townName, addressDetail} = val.data
    text.value = provinceName + cityName + countyName + townName + addressDetail;
  } else {
    text.value = val.data.addressStr;
  }
  showAddressSelect.value = false
};

const selected = (prevExistAdd: any, nowExistAdd: any, arr: any) => {
  console.log(prevExistAdd);
  console.log(nowExistAdd);
};

const switchModule = (cal: { type: string; }) => {
  if (cal.type == 'custom') {
    console.log('点击了“选择其他地址”按钮');
  } else {
    console.log('点击了自定义地址左上角的返回按钮');
  }
};
const onChange = (cal: { next: string | number; }) => {
  const name = address[cal.next]
  if (name.length < 1) {
    showAddressSelect.value = false;
  }
};

const closeMask = (val: any) => {
  showAddressSelect.value = false;
  console.log('关闭弹层', val);
};
</script>

<style lang="scss" scoped>
.goods-attr-group {
  --van-cell-group-inset-padding: 0
}

.custom-cell:deep(.van-cell__value) {
  min-width: 80%;
  text-align: left;
}
</style>