import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
//引入element-ui组件
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';//需要单独引入css文件
Vue.use(Element);



Vue.config.productionTip = false
axios.default.withCredentials=true //让axioms携带cookie
Vue.prototype.axios=axios;//加入原型对象 其他子组件可以直接使用

// import './lib/mui/css/mui.css'

// import './lib/mui/css/icons-extra.css'
//引入vue-resource发送请求
//1.引入组件
import VueResource from "vue-resource";
//2.注册
Vue.use(VueResource);


//4.2引入Vuex
import Vuex from "vuex"
//4.3注册Vuex实例
Vue.use(Vuex)
//4.4创建Vuex实例对象
var store=new Vuex.Store({
  state:{count:0},//购物车中商品的数量
  mutations:{ //修改共享数据的二个方法 参数：共享数据 属性
    increment(state,c){
      state.count+=parseInt(c);  
    },
    substract(state){
      state.count--
    }
  },
  getters:{
    optCount:function(state){
      return state.count; //返回共享数据
    }
  }
});

new Vue({
  router,
  render: h => h(App), //-render渲染h参数相当  创建一个组件
  store //将vuex实例对象注册到vue中
}).$mount('#app') //将根组件显示到index.html
