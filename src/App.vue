<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  background-color:#f6f7f9 !important;
  font-family: 'Roboto', sans-serif !important;
  font-size:17px !important;
  font-weight:300;
  height:auto !important;
}
.banner{
    width:100%;
    height:100%;
}
.banner img{
    width:100%;
    height:auto;
}
#login .ant-divider-inner-text,#register .ant-divider-inner-text{
    color:#999;
}
.step-title{
   margin:20px 0 20px;
   font-size:24px;
   text-align:center;
}
.text-center{
   text-align:center;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #44cfa9; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #26b48e; 
}

.logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
