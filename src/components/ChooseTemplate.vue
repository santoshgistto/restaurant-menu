<template>
      <div class="choose-template">
        <router-link class="back-btn" to="/first"><a-icon type="arrow-left" /> Back</router-link> 
        <h2 class="step-title">Please choose a template</h2>
          <div class="choose-wrap">
                <a-row :gutter="30">
                     <a-col :key="template.id" :md="8" :sm="12" :xs="24" v-for="template in templates">
                         <h4 class="text-center">{{template.name}}</h4>
                        <img @click="getTemplate(template.id)" class="template-img" :src="template.img" :alt="template.name">
                    </a-col>
                </a-row>
          </div>
    </div>
</template>

<script>
import {store} from './../store'
import {userdb,auth} from './../firebase'
import templates from './../templates'
export default {
  name:'ChooseTemplate',
data(){
       return{
           templates:templates
       }
   },
   methods:{
     getTemplate(name){
         let self = this;
         if(!name){
             this.$message.error('Please choose at least one template', 2);
             return;
         }
            let choseTemplate = self.templates.filter(e=>e.id == name)[0];
            let currentProject = store.getters.getProject;
            if(!currentProject.projectTitle || !currentProject.projectDesc){
                self.$message.error('You need to add project name and description', 2)
                self.$router.push('/first');
                return;
            }
            userdb.doc(auth.currentUser.uid).collection('projects').add(currentProject).then((data)=>{
              localStorage.clear();
              localStorage.setItem('from-choose',true);
              localStorage.setItem('gjs-html',choseTemplate.gjsHTML);
              localStorage.setItem('gjs-css',choseTemplate.gjsCSS);
              localStorage.setItem('gjs-assets',choseTemplate.gjsAssets);
              localStorage.setItem('gjs-components',choseTemplate.gjsComponents);
               localStorage.setItem('gjs-doc-id',data.id);
               localStorage.setItem('gjs-project-title',currentProject.projectTitle)
               localStorage.setItem('gjs-project-desc',currentProject.projectDesc)
                self.$router.push('/builder/'+data.id);
             })
        }
    }
}
</script>

<style scoped>
.back-btn{
    position:fixed; 
    top:30px;
    left:40px;
}
.back-btn:hover{
    cursor:pointer;
}
.choose-template{
    width:100vw;
    height:100vh;
    overflow:hidden;
}
.choose-wrap{
    width:80%;
    margin:auto;
    height:80%;
    overflow-y:scroll;
    overflow-x:hidden;
}
.choose-wrap .template-img{
    transition:all ease 0.5s;
    width:100%;
    height:320px;
    object-fit: cover;
    margin-bottom:30px;
    border:10px solid transparent;
}
.choose-wrap .empty{
    border:10px dashed #eee;
    text-align:center;
    width:100%;
    height:320px;
    line-height:320px;
}
.choose-wrap .template-img:hover,.choose-wrap .empty:hover{
    cursor:pointer;
    border:10px solid #44cfa9;
}
@media (max-width:576px){
    .choose-wrap{
        width:100%;
    }
}
</style>
