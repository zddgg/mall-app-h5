<template>
  <div class="nut-sku-operate" v-if="btnOptions.length > 0">
    <div class="nut-sku-operate-desc" v-if="btnExtraText">{{ btnExtraText }}</div>

    <slot name="operate-btn"></slot>

    <div class="nut-sku-operate-btn" v-if="!getSlots('operate-btn')">
      <div
          :class="[`nut-sku-operate-btn-${btn}`, 'nut-sku-operate-btn-item']"
          v-for="(btn, i) in btnOptions"
          :key="i"
          @click="clickBtnOperate(btn)"
      >
        {{ getBtnDesc(btn) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {PropType, useSlots} from "vue";

const props = defineProps({
  // 底部按钮配置  confirm cart  buy
  btnOptions: {
    type: Array as PropType<string[]>,
    default: () => ['confirm']
  },

  btnExtraText: {
    type: String,
    default: ''
  },

  // 立即购买文案
  buyText: {
    type: String,
    default: '立即购买'
  },
  // 加入购物车文案
  addCartText: {
    type: String,
    default: '加入购物车'
  },

  confirmText: {
    type: String,
    default: '确定'
  }
})

const emits = defineEmits(
    ['click', 'changeSku', 'changeBuyCount', 'clickBtnOperate']
)

const getSlots = (name: string) => useSlots()[name];

const getBtnDesc = (type: string) => {
  let mapD: { [props: string]: string } = {
    confirm: props.confirmText,
    cart: props.addCartText,
    buy: props.buyText
  };

  return mapD[type];
};


const clickBtnOperate = (btn: string) => {
  emits('clickBtnOperate', btn);
};

</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>