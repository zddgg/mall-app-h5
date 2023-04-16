<template>
  <div class="nut-sku-header">
    <img class="nut-sku-header-img" :src="goods.imagePath"/>
    <div class="nut-sku-header-right">
      <template v-if="getSlots('sku-header-price')">
        <slot name="sku-header-price"></slot>
      </template>
      <nut-price v-else :price="goods.price" :needSymbol="true" :thousands="false"></nut-price>

      <template v-if="getSlots('sku-header-extra')">
        <slot name="sku-header-extra"></slot>
      </template>
      <div class="nut-sku-header-right-extra"
           v-if="goods.skuId && !getSlots('sku-header-extra')"
      >
        {{ '商品编号' }}&nbsp;:&nbsp;{{ goods.skuId }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useSlots} from "vue";

const props = defineProps({
  goods: {
    type: Object,
    default: {}
  }
})

const emits = defineEmits(
    []
)

const getSlots = (name: string) => useSlots()[name];

</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>