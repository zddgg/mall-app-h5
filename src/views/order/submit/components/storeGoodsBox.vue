<template>
  <div style="margin-top: 20px; padding: .8rem; background-color: #ffffff; border-radius: .8rem">
    <div>
      <van-space>
        <span>JD</span>
        <span>京东自营</span>
      </van-space>
    </div>
    <div style="display: flex; margin-top: .6rem">
      <div>
        <van-image
            width="100"
            height="100"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
      <div style="margin-left: .4rem">
        <div>
          <nut-ellipsis :rows="1"
                        content="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"></nut-ellipsis>
        </div>
        <div style="margin-top: .2rem">
          <span style="font-size: .6rem">规格1</span>
          <nut-divider direction="vertical"/>
          <span style="font-size: .6rem">规格1</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: .2rem">
          <div style="height: 2rem; line-height: 2rem">
            <nut-price :price="12.53" size="large" :need-symbol="true"></nut-price>
          </div>
          <div style="height: 2rem; line-height: 2rem">
            <span>X 1</span>
          </div>
        </div>
        <div style="margin-top: .2rem">
          <van-space>
            <van-tag plain type="danger">
                <span>
                  支持7天无理由退货
                </span>
            </van-tag>
            <van-tag plain type="danger">
                <span>
                  15天保价
                </span>
            </van-tag>
          </van-space>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: .6rem">
      <div>
        <span>配送</span>
      </div>
      <div style="display: flex">
        <div style="text-align: right">
          <div>
            <span>京东快递</span>
          </div>
          <div>
            工作日、双休日与节假日均可送货
          </div>
        </div>
        <div style="margin-left: .6rem; height: 1.5rem; line-height: 1.5rem">
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: .6rem; height: 3rem">
      <div>
        <span style="height: 3rem; line-height: 3rem">留言</span>
      </div>
      <div style="display: flex">
        <van-field
            placeholder="建议留言前先与商家沟通确认"
            input-align="right"
        >
        </van-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "storeGoodsBox"
}
</script>

<style scoped>

</style>