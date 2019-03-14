import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    // state
    state:{
        projectData:{}
    },
    // sync
    mutations:{
        addToProject(state, data) {
           state.projectData = Object.assign({},state.projectData,data)
        }
    },
    // imidiately trigger
    actions:{
       
    },
    // get from state
    getters:{
        getProject(state){
            return state.projectData;
        }
    }
})
