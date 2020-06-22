import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    Checked:true,
    CartData:[],
    TotalPrice:0,
      chosenAddressId: '1',
      AddressList:[
          {
              id: '1',
              name: '张三',
              tel: '13000000000',
              address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
              isDefault: true,
          },
          {
              id: '2',
              name: '李四',
              tel: '1310000000',
              address: '浙江省杭州市拱墅区莫干山路 50 号',
          },
      ]
  },
  mutations: {
     addCart(state,val){
        if(state.CartData.length<=0){
            state.CartData.push(val)
        }else{
            for(let i=0;i<state.CartData.length;i++){
                if(val.iid===state.CartData[i].iid){
                    state.CartData[i].count++
                    return
                }
            }
            state.CartData.push(val)
        }


    },//添加收藏商品到CartData
     ifActive(state){
        for(let i=0;i<state.CartData.length;i++){
            if(state.CartData[i].isActive==false) {
                state.Checked=false
                return
            }
        }
          state.Checked=true
      },//判断商品是否全选状态
       publicActive(state){
          state.CartData.forEach((item,index)=>{
              if(state.Checked){
                  item.isActive=true
              }else{
                  item.isActive=false
              }

          })
      },//全选全不选
      addCount(state,val){
         state.CartData[val].count++
      },//商品数量加
      decreaseCount(state,val){
         if(state.CartData[val].count>0){
             state.CartData[val].count--
         }
          if(state.CartData[val].count==0){
              state.CartData[val].isActive=false
          }
      },//商品数量减
  },
    getters:{
        TotalProduct(state){
         state.TotalPrice=0
          state.CartData.forEach((item,index)=>{
              if(item.isActive==true){
                  state.TotalPrice+=Number(item.Price) * item.count
              }
          })
            console.log(state.TotalPrice)
      }
    },
  actions: {
  },
  modules: {
  }
})
