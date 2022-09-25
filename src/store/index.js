import Vue from 'vue'
import Vuex from 'vuex'
import home from "./home/home"
import se from "./home/search"
import detail from "./detail/detail"
import addCart from "@/store/addcart/addcart";
import register from "@/store/register/register";
import login from "@/store/login/login"
import trade from "@/store/trade/trade";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home:home,
    s:se,
    detail,
    addCart,
    register,
    login,
    trade



  }

})
