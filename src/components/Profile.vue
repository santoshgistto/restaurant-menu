<template>
    <a-layout id="profile" style="min-height: 100vh">
    <Sidebar activeMenu="2" />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <h4>Hello Testing</h4>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Profile</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
               <h1>Welcome to Profile Page</h1>
         </div>
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
import Sidebar from './partials/sidebar'
import Footer from './partials/footer'
export default {
   name: 'Profile',
   components:{
     Sidebar,
     Footer
   },
   data(){
       return{
           isLoading:false
       }
   }
}
</script>

<style>
</style>
