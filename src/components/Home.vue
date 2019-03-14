<template>
    <a-layout id="home" style="min-height: 100vh">
    <Sidebar activeMenu="1" />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <h4 style="padding-left:30px;">Website Name</h4>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Projects</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                <Projects />
         </div>
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
import Projects from './partials/projectList'
import Sidebar from './partials/sidebar'
import Footer from './partials/footer'
export default {
   name: 'Home',
   components:{
     Projects,
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
