<template>
      <div class="first-step">
        <div class="center-box">
              <router-link class="close-btn" to="/"><a-icon type="close" /></router-link>
             <div id="project-name" :style="isDesc?'transform:translateY(-100%);opacity:0;visibility:hidden;height:0;':null">
               <h2 class="step-title"> Project name - <strong>{{projectName}}</strong></h2>
             <form id="pro-name" @submit.prevent="handleName"><input name="project-name" @keyup="projectName = $event.target.value" class="project-name" type="text" /></form>
             </div>
              <a-icon v-if="isLoading" style="color:#44cfa9;font-size:40px;transform:translateY(-100%);" type="loading" />
             <div :style="isDesc?'transform:translateY(-40%);opacity:1;visibility:visible;':'transform:translateY(-100%);opacity:0;visibility:hidden;'" id="project-name">
               <h2 class="step-title"> A brief description (optional)</h2>
             <form id="pro-desc" @submit.prevent="handleDesc"><input name="project-desc" @keyup="projectDesc = $event.target.value" class="project-name project-desc" type="text" /></form>
             </div>
        </div>
    </div>
</template>

<script>
import {store} from './../store'
import { setTimeout } from 'timers';
export default {
  name:'FirstStep',
data(){
       return{
           projectName:'',
           projectDesc:'',
           isLoading:false,
           isDesc: false
       }
   },
   methods:{
     handleName(e){
       e.preventDefault();
        let self = this;
          let proName = document.querySelector('input[name="project-name"]').value;
          if(!self.projectName){
              self.$message.error('Please type project name', 2)
              return;
          }
          store.commit('addToProject',{projectTitle:proName});
          self.isDesc = true; 
     },
     handleDesc(e){
       e.preventDefault();
        let self = this;
         self.isLoading = true;
          let proDesc = document.querySelector('input[name="project-desc"]').value;
          store.commit('addToProject',{projectDesc:proDesc});
          setTimeout(()=>{
            self.$router.push('/choose')
          },1000)
     }
   }
}
</script>

<style scoped>
.first-step{
  display:flex;
  align-items: center;
  width:100vw;
  height:100vh;
  background:#fff;
  position:fixed;
  top:0;
  left:0;
  z-index:999;
}
.center-box{
  text-align:center;
  max-width:600px;
  box-sizing: border-box;
  margin:auto;
}
.close-btn{
  position:absolute;
  font-size:26px;
  top:10px;
  right:20px;
}
#project-name{
    transition:all ease 0.5s;
}
.project-name{
  font-size:24px;
  width:260px;
  border:transparent;
  border-bottom:1px solid #ddd;
}
.project-name:focus{
  outline:none;
  border-bottom:1px solid #44cfa9;
}
.project-desc{
  width:100%;
}
</style>
