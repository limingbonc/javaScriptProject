import  Vue from 'vue'
import  App from './App.vue'
import './components/index.css'
new Vue({
  el:'#app',
  components: {App},  //将App映射为标签
  template: '<App/>'   //模版
})
