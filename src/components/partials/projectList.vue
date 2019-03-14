<template>
<div class="project-list">
<a-row :gutter="30">
      <a-icon v-if="isLoading" style="font-size:40px;color:#44cfa9" type="loading" />
      <a-col style="margin-bottom:30px" :md="6" :sm="8" :xs="24" :key="project.id" v-for="project in projects">
      <router-link :to="'builder/'+project.id">
        <a-card
  hoverable
  style="width: 100%"
>
  <template class="ant-card-actions" slot="actions">
    <a-icon type="setting" />
    <a-popconfirm title="Are you sure, you want to delete this project?" @confirm="deleteProject(project.id)" okText="Yes" cancelText="No">
      <a-icon type="delete" />
    </a-popconfirm>
  </template>
  <a-card-meta
    :title="project.projectTitle||''"
    :description="turncate(project.projectDesc||'')">
  </a-card-meta>
</a-card>
      </router-link>
  </a-col>
   <a-col v-if="!isLoading" :md="6" :sm="8" :xs="24" key="01">
        <router-link to="/first">
          <a-tooltip placement="top" >
          <template slot="title">
              <span>Add New Project</span>
          </template>
          <div class="addnew">
              <a-icon type="plus" />
          </div>
         </a-tooltip>
      </router-link>
     </a-col>
</a-row>
</div>
</template>

<script>
import {userdb,auth} from './../../firebase';
import {store} from './../../store';
export default{
    name:'Projects',
    data(){
      return{
        projects:[],
        isLoading:false
      }
    },
     mounted(){
       this.fetchProjects();
   },
   methods:{
     fetchProjects(){
          let self = this;
          self.isLoading = true;
          userdb.doc(auth.currentUser.uid).collection("projects").get().then(data=>{
            if(!data){return}
            data.forEach(e=>{
                  const project = Object.assign({},{id:e.id},e.data())
                  self.projects.push(project);
             })
             store.commit('addToProject', self.projects);
              self.isLoading = false;
          })
     },
     deleteProject(deleteId){
          let self = this;
          userdb.doc(auth.currentUser.uid).collection('projects').doc(deleteId).delete().then(()=>{
           self.projects = self.projects.filter(e=>e.id !== deleteId);
           self.$message.success('Successfully delete!', 2);
      }).catch(err=>{
           self.$message.error(err.message, 2)
      })
     }
   }
}
</script>

<style>
.addnew{
  width:100%;
  height:164px;
  line-height:144px;
  text-align:center;
  font-size:30px;
  border:10px dashed #ddd;
}
.addnew:hover{
  cursor:pointer;
}
.project-list .ant-card-body{
  height:114px;
}
</style>
