<template>
    <a-layout id="builder" style="min-height: 100vh">
    <Sidebar activeMenu="0" />
    <a-layout>
      <a-layout-content>
        <div :style="{background: '#fff', minHeight: '700px' }">
                 <div id="gjs"></div>
         </div>
      </a-layout-content>
      <a-modal
      v-model="isModal"
      :title="isDeploying?'Name your domain':'Published!'"
    >
      <template slot="footer">
         <a-button key="back" @click="isModal = false">cancel</a-button>
      </template>
      <div v-if="isDeploying" class="result">
      <p>Name to deploy (no space)</p>
      <p><input type="text" name="deploy-name"></p>
      <a-button key="back" @click="publish" type="primary">Publish</a-button>
      </div>
      <a v-if="!isDeploying" target="_blank" :href="'http://'+publishURL">{{'http://'+publishURL}}</a>
    </a-modal>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
import Sidebar from './partials/sidebar'
import Footer from './partials/footer'
import {auth,userdb,webdb} from './../firebase'
export default {
   name: 'Builder',
   components:{
     Sidebar,
     Footer
   },
   data(){
       return{
          token_key:'rGD1oFEX7rMcA8jfbXwBtAPgQImnEl2HIafFasN5JWXxV5lpW2rvZq2sAMtmuPVR',
          isDeploying:true,
           isModal:false,
           isLoading:false,
           publishURL:"",
           project:{}
       }
   },
   mounted(){
     let self = this;
     let fromChoose = localStorage.getItem('from-choose');
     self.gramateria();
     if(fromChoose){
       return;
     }
     localStorage.clear();
     if(self.$route.params.id){
       let pId = this.$route.params.id;
      userdb.doc(auth.currentUser.uid).collection('projects').doc(pId).get().then(doc=>{
        if(!doc){return}
        self.project = doc.data();
                        localStorage.setItem('gjs-doc-id', pId);
                        localStorage.setItem('gjs-project-title', doc.data().projectTitle||"")
                        localStorage.setItem('gjs-project-desc', doc.data().projectDesc||"")
                        localStorage.setItem('gjs-html', doc.data().gjsHTML||"");
                        localStorage.setItem('gjs-css', doc.data().gjsCSS||"");
                        localStorage.setItem('gjs-styles', doc.data().gjsStyles||"");
                        localStorage.setItem('gjs-assets', doc.data().gjsAssets||"");
                        localStorage.setItem('gjs-components', doc.data().gjsComponents||"");
      })
     }
   },
   methods:{
     publish(){
       let self = this;
       var projectName = document.querySelector('input[name="deploy-name"]').value;
       if(!projectName){
         self.$message.error("Do not leave blank", 2);
         return;
       }
       if(!/^[a-z0-9]+(?:[_-][a-z0-9]+)*$/.test(projectName)){
         self.$message.error("Please add only strings & numbers without spaces.", 2);
         return;
       }
                        let currentProjectId = localStorage.getItem('gjs-doc-id');
                        let gjsHTML =  localStorage.getItem('gjs-html');
                        let gjsCSS =  localStorage.getItem('gjs-css');
                        let gjsAsssets =  localStorage.getItem('gjs-assets');
                        let gjsComponents =  localStorage.getItem('gjs-components');
                        let projectTitle =  localStorage.getItem('gjs-project-title');
                        let projectDesc =  localStorage.getItem('gjs-project-desc');
                        const deployData = {
                          token: self.token_key,
                           html: gjsHTML,
                           css: gjsCSS,
                           webId: projectName,
                           title: projectTitle
                        }
                        const projectData = {
                          gjsHTML,
                          gjsCSS,
                          gjsAsssets,
                          gjsComponents,
                           projectTitle: projectTitle,
                           projectDesc
                        }
                        webdb.doc(currentProjectId).set(projectData,{merge:true});
                        var formData = new FormData();
                        for(let i in deployData){
                            formData.append(i,deployData[i])
                        }
                        var publish_url = '/deploys/post.php'
                        fetch(publish_url,{
                            method:'post',
                            body:formData
                        }).then(e=>e.json()).then(res=>{
                            if(res[0].status == 'error'){
                              self.$message.error(res[0].msg,2);
                              return;
                            }
                            self.isDeploying = false;
                           self.publishURL = res[0].url;
                            self.$message.success('Successfully deployed!',2);
                        }).catch(err=>{
                              self.$message.error(err.message,2);
                        })
     }
   }
}
</script>

<style>
input[name="deploy-name"] {background-color: #fff;border: 1px solid #44cfa9; width:100%;height:30px;}
input[name="deploy-name"]:focus{outline:none; box-shadow:none; background:#f6f7f9; color:#3e446c; border:1px solid #3c997f;}
#gjs{
    width:100%;
    height:700px !important;
}
@import '../../static/vendors/grapesjs/css/grapes.min.css';
@import '../../static/vendors/grapesjs/css/gly.css';
@import '../../static/vendors/grapesjs/gram.min.css';
</style>
