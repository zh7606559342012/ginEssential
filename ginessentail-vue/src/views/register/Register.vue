<template>
  <div class="register">
    <b-row>
      <b-col
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
      >
        <b-card title="注册">
          <b-form>
            <b-form-group description="We'll never share your email with anyone else.">
              <b-form-input
                v-model="user.name"
                type="text"
                placeholder="输入您的名称（选填）"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group description="We'll never share your email with anyone else.">
              <b-form-input
                v-model="user.telephone"
                type="number"
                placeholder="输入手机号"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group description="We'll never share your email with anyone else.">
              <b-form-input
                v-model="user.password"
                type="password"
                placeholder="输入密码"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        telephone: '',
        password: '',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
