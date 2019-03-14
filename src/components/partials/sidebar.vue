<template>
    <a-layout-sider
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="[activeMenu]" mode="inline">
        <a-menu-item key="1">
          <router-link to="/">
          <a-icon type="profile" />
          <span>Dashboard</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/profile">
          <a-icon type="user" />
          <span>Profile</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/setting">
          <a-icon type="setting" />
          <span>Setting</span>
          </router-link>
        </a-menu-item>
         <a-menu-item key="4" @click="signOut">
        <a-icon type="logout" />          
            <span>Log out</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
import {auth} from './../../firebase';
export default {
    name:'Sidebar',
    props:['activeMenu'],
    data(){
        return{
           collapsed: true
        }
    },
       methods:{
       signOut() {
                let self = this;
                 const spinner = this.$message.loading('loading out..', 0);
                 auth.signOut().then(() => {
                    setTimeout(spinner,0);
                    setTimeout(()=>{
                        self.$message.success('Successfully Logged Out!',2)
                    },1000)
                    setTimeout(() => {
                        this.$router.push('/login')
                    }, 3000)
                }).catch((error) => {
                     self.$message.error(error.message,2)
                })
            }
   }
}
</script>

<style>

</style>
