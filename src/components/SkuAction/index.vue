<template>
  <van-popup
      :show="showPopup"
      round
      position="bottom"
      :style="{ height: '75%' }"
      @close="closePopup"
  >
    <div class="nut-sku">
      <slot name="sku-header"></slot>
      <sku-header :goods="goods" v-if="!getSlots('sku-header')">
        <template #sku-header-price v-if="getSlots('sku-header-price')">
          <slot name="sku-header-price"></slot>
        </template>

        <template #sku-header-extra v-if="getSlots('sku-header-extra')">
          <slot name="sku-header-extra"></slot>
        </template>
      </sku-header>

      <div class="nut-sku-content">
        <slot name="sku-select-top"></slot>

        <slot name="sku-select"></slot>
        <sku-selector v-if="!getSlots('sku-select')"
                      :sku="sku"
                      @selectSku="selectSku"
        >
        </sku-selector>

        <slot name="sku-stepper"></slot>
        <sku-stepper
            v-if="!getSlots('sku-stepper')"
            :goods="goods"
            :stepperTitle="stepperTitle || '购买数量'"
            :stepperMax="stepperMax"
            :stepperMin="stepperMin"
            :stepperExtraText="stepperExtraText"
            @add="add"
            @reduce="reduce"
            @changeStepper="changeStepper"
            @overLimit="stepperOverLimit"
        ></sku-stepper>

        <slot name="sku-stepper-bottom"></slot>
      </div>

      <sku-operator
          :btnOptions="btnOptions"
          :btnExtraText="btnExtraText"
          :buyText="buyText || '立即购买'"
          :addCartText="addCartText || '加入购物车'"
          :confirmText="confirmText || '确认'"
          @clickBtnOperate="clickBtnOperate"
      >
        <template #operate-btn v-if="getSlots('sku-operate')">
          <slot name="sku-operate"></slot>
        </template>
      </sku-operator>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import {onMounted, PropType, ref, useSlots, watch} from "vue";
import SkuHeader from "@/components/SkuAction/components/SkuHeader.vue";
import SkuSelector from "@/components/SkuAction/components/SkuSelector.vue";
import SkuStepper from "@/components/SkuAction/components/SkuStepper.vue";
import SkuOperator from "@/components/SkuAction/components/SkuOperator.vue";

interface SkuActionProps {
  show: boolean,
}

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },

  sku: {
    type: Array,
    default: []
  },

  goods: {
    type: Object,
    default: {}
  },

  // stepper 最大值
  stepperMax: {
    type: Number,
    default: 99999
  },

  // stepper 最小值
  stepperMin: {
    type: Number,
    default: 1
  },

  // 底部按钮配置  confirm cart  buy
  btnOptions: {
    type: Array as PropType<string[]>,
    default: () => ['confirm']
  },

  // 数量选择左侧文案
  stepperTitle: {
    type: String,
    default: ''
  },

  // stepper 前面文案
  stepperExtraText: {
    type: [Function, Boolean],
    default: false
  },

  btnExtraText: {
    type: String,
    default: ''
  },

  // 立即购买文案
  buyText: {
    type: String,
    default: ''
  },

  // 加入购物车文案
  addCartText: {
    type: String,
    default: ''
  },

  // 确定文案
  confirmText: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(
    [
      'update:show',
      'select-sku',
      'change-stepper',
      'click-btn-operate',
      'click-close-icon',
      'click-overlay',
      'close',
      'reduce',
      'add',
      'over-limit'
    ]
)

const showPopup = ref(props.show);
const goodsCount = ref<Number>(props.stepperMin);

const getSlots = (name: string) => useSlots()[name];

// 商品规格 sku 选择
const selectSku = (skus: any) => {
  emits('select-sku', skus);
};

// 数量计步器变化
const changeStepper = (value: number) => {
  goodsCount.value = value;
  emits('change-stepper', value);
};

// 修改购买数量 add 加  reduce 减
const add = (value: number) => {
  emits('add', value);
};

const reduce = (value: number) => {
  emits('reduce', value);
};

// 触发极限值
const stepperOverLimit = (count: any) => {
  emits('over-limit', count);
};

// 点击 button 操作
const clickBtnOperate = (btn: string) => {
  emits('click-btn-operate', {
    type: btn,
    value: parseInt(goodsCount.value)
  });
};

const close = () => {
  emits('update:show', false);
};

const closePopup = () => {
  emits('close');
  showPopup.value = false;
};

watch(
    () => props.show,
    (value) => {
      showPopup.value = value;
    }
);

watch(
    () => showPopup.value,
    (value) => {
      if (value == false) {
        close();
      }
    }
);
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>