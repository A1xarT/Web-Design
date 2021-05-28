import Vue from 'vue'
import Vuex from 'vuex'
import UserList from "@/services/UserService.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userList: []
    },
    getters: {
        getUserList(state) {
            return state.userList.getUsers()
        }
    },
    mutations: {
        INIT_USERS: (state, storage) => {
            if (storage === 'backend')
                state.userList = new UserList()
            else throw TypeError("use backend storage")
        }
    },
    actions: {
        INIT_USERS: (context, storage) => {
            context.commit('INIT_USERS', storage)
        }
    }
})
