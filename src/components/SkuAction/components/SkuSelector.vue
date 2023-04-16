<template>
  <div class="nut-sku-select">
    <div class="nut-sku-select-item" :key="item.id" v-for="(item, index) in skuInfo">
      <div class="nut-sku-select-item-title">{{ item.name }}</div>
      <div class="nut-sku-select-item-skus">
        <div
            class="nut-sku-select-item-skus-sku"
            @click="changeSaleChild(itemAttr, itemAttrIndex, item, index)"
            :class="[{ active: !itemAttr.disable && itemAttr.active }, { disable: itemAttr.disable }]"
            :key="itemAttr.name"
            v-for="(itemAttr, itemAttrIndex) in item.list"
        >
          {{ itemAttr.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {onMounted, ref, watch} from "vue";

interface SkuInfo {
  name: string;
  id: number;
  active: boolean;
  disable: boolean;

  [props: string]: any;
}

const props = defineProps({
  sku: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(
    ['selectSku']
)

const skuInfo = ref<SkuInfo[]>([]);

onMounted(() => {
  if (props.sku.length > 0) {
    skuInfo.value = [].slice.call(props.sku);
  }
});

const changeSaleChild = (attrItem: any, index: any, parentItem: any, parentIndex: any) => {
  if (attrItem.checkFlag || attrItem.disable) {
    return;
  }

  emits('selectSku', {
    attrItem,
    index,
    parentItem,
    parentIndex
  });
};

watch(
    () => props.sku,
    (value) => {
      skuInfo.value = [].slice.call(value);
    },
    {deep: true}
);
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>