import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import Button from "@/components/Button.vue";

import recordModel from '@/models/recordModel'
import tagListModel from '@/models/tagListModel'
import versionModel from '@/models/versionModel'

Vue.config.productionTip = false

Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)
Vue.component('Button',Button)

window.tagList=tagListModel.fetch()
window.addTag=(name)=>{
  return tagListModel.add(name)
}

window.recordList=recordModel.fetch()




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
