<template>
  <view class="nut-sku-stepper">
    <view class="nut-sku-stepper-title">{{ stepperTitle }}</view>
    <view class="nut-sku-stepper-limit" v-html="getExtraText()"></view>
    <view class="nut-sku-stepper-count">
      <nut-input-number
          v-model="goodsCount"
          :min="stepperMin"
          :max="stepperMax"
          @add="add"
          @reduce="reduce"
          @overlimit="overlimit"
          @change="changeStepper"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";

const props = defineProps({
// 购买数量最大值
  stepperMax: {
    type: Number,
    default: 99999
  },

  stepperMin: {
    type: Number,
    default: 1
  },

  // stepper 前文案提示
  stepperExtraText: {
    type: [Function, Boolean],
    default: false
  },

  // 数量选择左侧文案
  stepperTitle: {
    type: String,
    default: '购买数量'
  }
})

const emits = defineEmits(
    ['click', 'changeSku', 'changeStepper', 'clickBtnOptions', 'overLimit', 'reduce', 'add']
)

const goodsCount = ref(0);

onMounted(() => {
  goodsCount.value = props.stepperMin;
});

const getExtraText = () => {
  const { stepperExtraText } = props;

  if (stepperExtraText && TypeOfFun(stepperExtraText) == 'function') {
    return stepperExtraText();
  } else {
    return '';
  }
};

// 修改购买数量 add 加  reduce 减
const add = (value: number) => {
  emits('add', value);
};

const reduce = (value: number) => {
  emits('reduce', value);
};

// stepper 极限值
const overlimit = (e: Event, action: string) => {
  emits('overLimit', {
    action,
    value: goodsCount.value
  });
};
// stepper 发生了改变
const changeStepper = (value: number) => {
  goodsCount.value = value;

  emits('changeStepper', value);
};

const TypeOfFun = (value: any) => {
  if (null === value) {
    return 'null';
  }

  const type = typeof value;
  if ('undefined' === type || 'string' === type) {
    return type;
  }

  const typeString = toString.call(value);
  switch (typeString) {
    case '[object Array]':
      return 'array';
    case '[object Date]':
      return 'date';
    case '[object Boolean]':
      return 'boolean';
    case '[object Number]':
      return 'number';
    case '[object Function]':
      return 'function';
    case '[object RegExp]':
      return 'regexp';
    case '[object Object]':
      if (undefined !== value.nodeType) {
        if (3 == value.nodeType) {
          return /\S/.test(value.nodeValue) ? 'textnode' : 'whitespace';
        } else {
          return 'element';
        }
      } else {
        return 'object';
      }
    default:
      return 'unknow';
  }
};
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>