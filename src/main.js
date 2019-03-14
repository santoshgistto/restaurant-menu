import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './gramateria'
import './helper-functions'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

// firebase
import './firebase'
import {auth} from './firebase'


Vue.config.productionTip = false
let app;
auth.onAuthStateChanged(function() {
    if (!app) {
        new Vue({
            router,
            render: h => h(App)
        }).$mount('#app')
    }
})
