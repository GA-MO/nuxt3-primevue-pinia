<template>
  <div class="login-page">
    <div class="login-groups">
      <div class="login-group-logo">
        <img class="logo" src="@/assets/images/logo.svg" />
        <div class="text-welcome">ยินดีต้อนรับสู่</div>
        <div class="app-name text-bold">Admin Back Office</div>
      </div>
      <div class="login-group-content">
        <div class="title-group">
          <h1>Sign In <i /> เข้าสู่ระบบ</h1>
          <span>กรอกชื่อผู้ใช้งานและรหัสผ่านเพื่อเข้าสู่ระบบ</span>
        </div>
        <div class="login-box">
          <div class="field p-fluid">
            <InputText
              v-model="v$.username.$model"
              :class="{ 'p-invalid': v$.username.$error }"
              placeholder="ชื่อผู้ใช้งาน"
              autocomplete="off"
            />
            <div>
              <small v-if="v$.username.$error" class="p-error">
                {{ v$.username.required.$message }}
              </small>
            </div>
          </div>
          <div class="field p-fluid">
            <Password
              v-model="v$.password.$model"
              :class="{ 'p-invalid': v$.password.$error }"
              placeholder="รหัสผ่าน"
              :feedback="false"
              toggleMask
            />
            <div>
              <small v-if="v$.password.$error" class="p-error">
                {{ v$.password.required.$message }}
              </small>
            </div>
          </div>

          <div class="buttons p-fluid">
            <Button
              :label="`${
                wait.is('login') ? 'กำลังเข้าสู่ระบบ..' : 'เข้าสู่ระบบ'
              }`"
              @click="handleSubmit"
              :disabled="v$.error"
              :loading="wait.is('login')"
            />
            <!-- <Button label="ลืมรหัสผ่าน" ghost expanded /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { required, helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import axios from 'axios'

const wait = useWait()
const auth = useAuth()

const formState = reactive({
  username: '',
  password: '',
})

const validations = {
  username: {
    required: helpers.withMessage('กรุณากรอกชื่อผู้ใช้งาน', required),
    $autoDirty: true,
  },
  password: {
    required: helpers.withMessage('กรุณากรอกรหัสผ่าน', required),
    $autoDirty: true,
  },
}

const v$ = useVuelidate(validations, formState)

function handleSubmit() {
  wait.start('login', auth.login)
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: var(--primary-color);
  color: #fff;
}

.login-groups {
  display: flex;
}

.login-group-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 120px;

  > .text-welcome {
    font-size: 22px;
    margin-bottom: 10px;
  }

  > .app-name {
    font-size: 26px;
    background: #c04800;
    padding: 15px 26px;
    border-radius: 50px;
  }
}

.logo {
  width: 300px;
  margin-bottom: 30px;
}

.login-title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(243 112 33 / 28%);
}

.title-group {
  text-align: center;
  margin-bottom: 20px;

  > h1 {
    font-size: 28px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    > i {
      display: inline-block;
      height: 20px;
      width: 1px;
      background: rgb(255 255 255 / 39%);
      margin: 0 10px;
    }
  }
}

.login-box {
  width: 300px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 30px;
}

@media screen and (max-width: 775px) {
  .login-groups {
    flex-direction: column;
  }

  .logo {
    width: 200px;
    margin-bottom: 20px;
  }

  .login-group-logo {
    padding: 0;
    padding-bottom: 60px;

    > .text-welcome {
      font-size: 20px;
      margin-bottom: 5px;
    }

    > .app-name {
      font-size: 22px;
      background: #c04800;
      padding: 10px 20px;
      border-radius: 50px;
    }
  }
}
</style>
