<template>
<!-- Register Form --->
<div id="register">
  <a-row>
      <a-col :md="16" :sm="12">
          <div class="banner">
              <img src="./../assets/menu.svg" alt="menu">
          </div>
      </a-col>
      <a-col :md="8" :sm="12">
          <div class="register-box">
              <h4>Register</h4>
          <a-form
          ref="register"
    id="register-form"
    :form="form"
    class="register-form"
    @submit="handleRegister"
  >
    <a-form-item>
    <a-button type="primary" @click="loginWithGoogle" icon="google-plus" block>Google</a-button>
  </a-form-item>
 <a-divider>or</a-divider>
    <a-form-item>
      <a-input
        v-decorator="[
          'regemail',
          { rules: [{ required: true, message: 'Please input your email!' }] }
        ]"
        placeholder="Email"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'regpass',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
      <a-form-item>
      <a-input
        v-decorator="[
          'regcompass',
          { rules: [{ required: true, message: 'Please input your Password!' },{ validator: confirmPass}] }
        ]"
        type="password"
        placeholder="Comfirm Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        class="register-form-button"
        :loading="isLoading"
      >
        Register
      </a-button>
      Or  <router-link to="/login">Login</router-link>
            </a-form-item>
  </a-form>
          </div>
      </a-col>
  </a-row>
</div> <!-- register -->
</template>

<script>
import {fb,auth} from './../firebase';
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  data(){
      return{
          isLoading:false
      }
  },
  methods: {
    handleRegister (e) {
      e.preventDefault();
      let self = this;
      self.isLoading = true;
     this.form.validateFields((err, values) => {
        if (err) {
          return;
        }
        const {regemail,regpass} = values;
        auth.createUserWithEmailAndPassword(regemail, regpass)
                    .then(() => {
                        self.$message.success('Successfully registered!', 2);
                         self.isLoading = false;
                        setTimeout(() => {
                            self.$router.push('/first');
                        }, 2000)
                    }).catch((error) => {
                    self.$message.error(error.message,2);
                    self.isLoading = false;
        })
      });
    },
    confirmPass(rule, value, callback){
        let pass = document.querySelector('#regpass').value;
        if(!pass){return}
        if(value == pass){
            callback();
            return;
        }
        callback('Password do not match')
    },
    loginWithGoogle(){
                var provider = new fb.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/plus.login');
                let self = this;
                auth.signInWithPopup(provider).then(function () {
                    self.$router.push('/first');
                }).catch(function () {
                });
      }
  }
};
</script>
<style>
#register{
  transition:all ease 0.5s;
  max-width:800px;
   margin:10% auto;
  width:100%;
   background:#fff;
   box-shadow:1px 2px 10px #dae9fb;
   padding:20px;
   border-radius:4px;
   height:auto;
   box-sizing: border-box;
}
.register-box{
    padding:20px 20px 0 20px;
}
</style>