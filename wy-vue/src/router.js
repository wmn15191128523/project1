import Vue from 'vue'
import Router from 'vue-router'


//1.引入自定义组件
import index from "./components/index.vue";
import Home from "./components/home.vue";
import products from "./components/products.vue";
import details from "./components/details.vue";
import shopcart from "./components/shopCart.vue";
import login from "./components/login.vue";
//import footer from "./components/footer.vue";
//2.配置访问自定义组件的路径
Vue.use(Router);

export default new Router({
  routes: [
    {path:"/",component:Home,children:[
    {path:"",component:products},
    {path:"details",component:details},
    {path:"shopcart",component:shopcart},
    ]},/*{path:"/footer",component:footer}*/
    {path:"/index",component:index},
    {path:"/login",component:login}
  ]
})

//测试: 先启动服务器 npm run serve  
//localhost:3001/#/test  #:指路由