import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import typenav from "@/views/Home/typenav/typenav";
import "@/mock/mockServer"
import "swiper/css/swiper.css"
import { Button, MessageBox } from 'element-ui';
Vue.component(typenav.name,typenav)

Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(MessageBox.name, MessageBox);
Vue.prototype.$alert=MessageBox.alert
new Vue({

  beforeCreate() {
    Vue.prototype.$bus=this
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
