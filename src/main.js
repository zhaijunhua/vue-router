import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import router from './router'
// import Home from './components/Home'
// import Menu from './components/Menu'
// import Admin from './components/Admin'
// import About from './components/about/About'
// import Login from './components/Login'
// import Register  from './components/Register'
// //二级路由

// import Contact from './components/about/Contact'
// import History from './components/about/History'
// import Ordering from './components/about/Ordering'
// import Delivery from './components/about/Delivery'

// //三级；路径
// import Phone from './components/about/contact/Phone'
// import PersonName from './components/about/contact/PersonName'
import {routes} from './router'
Vue.use(VueRouter)

// const routes=[
//   {path:'/',name:'homeLink',component:Home},
//   {path:'/menu',name:'menuLink',component:Menu},
//   {path:'/admin',name:'adminLink',component:Admin},
//   {path:'/about',name:'aboutLink',redirect:'/about/history',component:About,
//       children:[
//           {path:'/about/contact',name:'contactLink',redirect:'/about/contact/personname',component:Contact,children:[
//             {path:'./about/contact/phonenumber',name:'phonenumber',component:Phone},
//             {path:'/about/contact/personname',name:'personname',component:PersonName}
//         ]},
//           {path:'/about/history',name:'historyLink',component:History},
//           {path:'/about/ordering',name:'orderingLink',component:Ordering},
//           {path:'/about/delivery',name:'deliveryLink',component:Delivery}
//       ]},
//   {path:'/login',name:'loginLink',component:Login},
//   {path:'/Register',name:'registerLink',component:Register},
//   {path:'*',redirect:'/'}   //如果输入的地址没有匹配到上面任何一种类型，就会跳转到home，可以根据需要进行修改
// ]

const router=new VueRouter({
  routes,
  mode:'history'
})

// //全局
// router.beforeEach((to,from,next)=>{
//     //alert("请先登录");
//     //next();
//     console.log(to);    //to就是要跳转到哪一个组件去

//   //判断是否进行登录 
//   //store.getters.isLogin===false
//     // if(to.path=='./login'||to.path=='/register'){
//     //   next();

//     // }
//     // else{
//     //   alert("请先登录，才能使用该功能");
//     //   next('/login');
//     // }
// })

//后置钩子

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
