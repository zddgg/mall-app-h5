<template>
  <div style="margin-top: 20px; padding: .8rem; background-color: #ffffff; border-radius: .8rem">
    <div style="display: flex; justify-content: space-between; margin-top: 1rem">
      <div>
        <span>商品金额</span>
      </div>
      <div style="display: flex">
        <div style="text-align: right">
          <nut-price :price="12.66" style="color: #000"/>
        </div>
        <div style="margin-left: .6rem; width: 1rem; height: 1.5rem; line-height: 1.5rem">
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 1rem">
      <div>
        <span>退换货运费</span>
      </div>
      <div style="display: flex">
        <div style="text-align: right">
          <nut-price :price="0.00" style="color: #000"/>
        </div>
        <div style="margin-left: .6rem; width: 1rem; height: 1.5rem; line-height: 1.5rem">
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 1rem">
      <div>
        <span>运费</span>
      </div>
      <div style="display: flex">
        <div style="text-align: right">
          <nut-price :price="20.00" style="color: #000"/>
        </div>
        <div style="margin-left: .6rem; width: 1rem; height: 1.5rem; line-height: 1.5rem">
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 1rem">
      <div>
        <span>立减</span>
      </div>
      <div style="display: flex">
        <div style="text-align: right">
          <span style="margin-right: .4rem; color: red; font-weight: bold">-</span>
          <nut-price :price="20.00"/>
        </div>
        <div style="margin-left: .6rem; width: 1rem; height: 1.5rem; line-height: 1.5rem">
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 1rem">
      <div>
        <span>礼金</span>
      </div>
      <div style="display: flex">
        <div style="text-align: right">
          <span style="margin-right: .4rem; color: red; font-weight: bold">-</span>
          <nut-price :price="20.00"/>
        </div>
        <div style="margin-left: .6rem; width: 1rem; height: 1.5rem; line-height: 1.5rem">
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 1rem">
      <div>
        <span>优惠券</span>
      </div>
      <div style="display: flex">
        <div style="text-align: right">
          <span style="margin-right: .4rem; color: red; font-weight: bold">-</span>
          <nut-price :price="20.00"/>
        </div>
        <div style="margin-left: .6rem; width: 1rem; height: 1.5rem; line-height: 1.5rem">
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
    <van-divider/>
    <div style="margin-top: 1rem">
      <div style="text-align: right; float: right; margin-right: 1.6rem">
        <span style="margin-right: .4rem">合计:</span>
        <nut-price :price="20.00"/>
      </div>
      <div style="margin-left: .6rem; width: 1rem; height: 1.5rem; line-height: 1.5rem">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "priceBox"
}
</script>

<style scoped>

</style>