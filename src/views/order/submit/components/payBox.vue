<template>
  <div style="margin-top: 20px; padding: .8rem; background-color: #ffffff; border-radius: .8rem">
    <div style="display: flex; justify-content: space-between; margin-top: 1rem">
      <div>
        <span>发票</span>
      </div>
      <div style="display: flex">
        <div style="text-align: right">
          <span>普票(商品明显-个人)</span>
        </div>
        <div style="margin-left: .6rem; width: 1rem; height: 1.5rem; line-height: 1.5rem">
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 1rem">
      <div>
        <span>支付方式</span>
      </div>
      <div style="display: flex">
        <div style="text-align: right">
          <span>在线支付</span>
        </div>
        <div style="margin-left: .6rem; width: 1rem; height: 1.5rem; line-height: 1.5rem">
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payBox"
}
</script>

<style scoped>

</style>