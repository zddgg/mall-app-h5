<template>
  <div style="display: flex; height: 100vh; align-items: center; justify-content: center">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            type="tel"
            v-model="userInfo.mobile"
            name="mobile"
            placeholder="请输入手机号"
        />
        <van-field
            type="digit"
            v-model="userInfo.authCode"
            name="authCode"
            placeholder="请输入验证码"
        >
          <template #button>
            <van-button
                size="small"
                type="primary"
                :disabled="!userInfo.mobile || showCountDown"
                @click="sendCode"
                style="width: 5rem"
            >
              <span v-if="!showCountDown">发送验证码</span>
              <van-count-down
                  v-else
                  ref="countDown"
                  millisecond
                  :time="countDownNum"
                  :auto-start="true"
                  format="ss"
                  @finish="countDownFinish"
              />
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button
            round
            block
            type="primary"
            native-type="submit"
            :disabled="!userInfo.mobile || !userInfo.authCode"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {useUserStore} from "@/store";
import {LoginData, sendSmsCode} from "@/api/user";
import {useRouter} from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const countDownNum = ref<Number>(10000);
const showCountDown = ref<Boolean>(false);
const countDown = ref({
  start: Function,
  reset: Function,
});
const sendCode = async () => {
  const {data} = await sendSmsCode({mobile: userInfo.mobile} as LoginData);
  userInfo.bizId = data.bizId
  showCountDown.value = true;
}

const countDownFinish = () => {
  countDown.value.reset();
  showCountDown.value = false;
}

const userInfo = reactive({
  mobile: '',
  bizId: '',
  authCode: '',
});

const onSubmit = async () => {
  try {
    await userStore.login(userInfo as LoginData);
    router.back()
    // const {redirect, ...othersQuery} = router.currentRoute.value.query;
    // await router.push({
    //   name: (redirect as string) || 'Home',
    //   query: {
    //     ...othersQuery,
    //   },
    // });
  } catch (err) {
  } finally {
  }
};


</script>

<style scoped>

</style>