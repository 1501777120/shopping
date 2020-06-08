import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import("views/home/Home")
const Cart = ()=>import("views/cart/Cart")
const Category = ()=>import("views/category/Category")
const User = ()=>import("views/user/User")
const ProductInfo = ()=>import("views/productInfo/ProductInfo")
Vue.use(VueRouter)

  const routes = [
      {
          path:'/',
          redirect:'/home'
      },
      {
          path:'/home',
          name:'Home',
          component:Home
      },
      {
          path:'/cart',
          name:'Cart',
          component:Cart
      },
      {
          path:'/category',
          name:'Category',
          component:Category
      },
      {
          path:'/user',
          name:'User',
          component:User
      },
      {
          path:'/productInfo',
          name:'ProductInfo',
          component:ProductInfo
      },
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
