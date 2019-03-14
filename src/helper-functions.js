import Vue from 'vue'
Vue.mixin({
    methods:{
        turncate(str){
            if(str.length < 80){return str;}
            return str.replace(/^(.{48}[^\s]*).*/, "$1") + ' ...';
        }
    }
})