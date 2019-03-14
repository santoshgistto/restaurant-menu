<template>
  <!-- Login Form --->
<div id="login">
    <a-row>
      <a-col :md="16" :sm="12">
          <div class="banner">
              <img src="./../assets/menu.svg" alt="menu">
          </div>
      </a-col>
      <a-col :md="8" :sm="12">
          <div class="login-box">
              <h4>LOGIN</h4>
          <a-form
    id="login-form"
    :form="form"
    class="login-form"
   @submit="handleSubmit"
  >
  <a-form-item>
    <a-button @click="loginWithGoogle" type="primary" icon="google-plus" block>Google</a-button>
  </a-form-item>
 <a-divider>or</a-divider>
    <a-form-item>
      <a-input
        v-decorator="[
          'email',
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
          'password',
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
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        Log in
      </a-button>
      Or <router-link to="/register">Register</router-link>
      <br />
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: false,
          }
        ]"
      >
        Remember me
      </a-checkbox>
      <br />
      <a
        class="login-form-forgot"
        href=""
      >
        Forgot password
      </a>
    </a-form-item>
  </a-form>
          </div>
      </a-col>
  </a-row>
</div>

</template>

<script>
import {fb,auth,userdb} from './../firebase';
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      let self = this;
      self.isLoading = true;
     this.form.validateFields((err, values) => {
        if (err) {
          return;
        }
        const {email,password} = values;
         auth.signInWithEmailAndPassword(email, password).then(() =>{
                    
                }).catch((error)=>{
                    self.$message.error(error.message, 2);
                    self.isLoading = false;
             })
      });
    },
    
    // if successfully sign in
    loginSuccess(){
         this.$message.success('Successfully logged in!', 2);
          this.isLoading = false;
          setTimeout(()=>{

              // redirect user to frist step component
               this.$router.push('/first');
          },1000)
    },
    loginWithGoogle(){
                var provider = new fb.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/plus.login');
                let self = this;

                // Sign in with Google
                auth.signInWithPopup(provider).then(function (data) {
                var {uid,displayName,photoURL,email} = data.user;
                const check = userdb.doc(uid).get();

                // Checking the current signin user is already existed or not
                check.then(function(doc){
                      if(doc.exists){
                        self.loginSuccess()
                        return
                      }
                      // if user doesn't exist, create a new user object
                      const user = {displayName,email,photoURL,projects:[]}

                    // add user data
                      userdb.doc(uid).set(user).then(()=>{
                             self.loginSuccess()
                      }).catch(function (err) {
                             self.$message.error(err.message,2)
                      })
              })
            }).catch(err=>{
                   self.$message.error(err.message,2)
            }) 
        }
  }
};
</script>
<style>
#login{
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
.login-box{
    padding:20px 20px 0 20px;
}
</style>