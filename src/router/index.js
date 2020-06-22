import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import("views/home/Home")
const Cart = ()=>import("views/cart/Cart")
const Category = ()=>import("views/category/Category")
const User = ()=>import("views/user/User")
const ProductInfo = ()=>import("views/productInfo/ProductInfo")
const ConfirmOrder = ()=>import("views/confirmorder/ConfirmOrder")
const AddressList = ()=>import("views/address/AddressList")
const AddressEdit = ()=>import("views/address/AddressEdit")
Vue.use(VueRouter)
  const routes = [
      {
          path:'/addressEdit',
          name:'AddressEdit',
          component:AddressEdit
      },
      {
          path:'/addressList',
          name:'AddressList',
          component:AddressList
      },
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
      {
          path:'/confirmOrder',
          name:'ConfirmOrder',
          component:ConfirmOrder
      },
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
