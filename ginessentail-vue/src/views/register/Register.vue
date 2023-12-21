<template>
  <div class="register">
    <b-row class="mt-5">
      <b-col
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
      >
        <b-card title="注册">
          <b-form>
            <b-form-group label="姓名">
              <b-form-input
                v-model="$v.user.name.$model"
                type="text"
                placeholder="输入您的名称（选填）"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="手机号">
              <b-form-input
                v-model="$v.user.telephone.$model"
                type="number"
                placeholder="输入手机号"
                :state="validation"
              ></b-form-input>
              <b-form-invalid-feedback :state="validation">
                手机号必须是11位
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation">
                手机号符合11位
              </b-form-valid-feedback>
            </b-form-group>
            <b-form-group label="密码">
              <b-form-input
                v-model="$v.user.password.model"
                type="password"
                placeholder="输入密码"
                required
              ></b-form-input>
            </b-form-group>
            <b-button
              variant="outline-primary"
              block
              @click="register"
            >
              注册
            </b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      user: {
        name: '',
        telephone: '',
        password: '',
      },
      validation: null,
    };
  },
  validations: {
    user: {
      name: {},
      telephone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      password: {},
    },
  },

  methods: {
    register() {
      if (this.user.telephone.length !== 11) {
        this.validation = false;
        return;
      }
      this.validation = true;

      console.log('register');
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
