<template>
    <div class="warp">
        <nav-bar></nav-bar>
        <div class="content">
            <Address></Address>
            <shopping-cart :cartList=cartList></shopping-cart>
            <order :price="price"></order>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Icon,Card,SubmitBar,Button } from 'vant';
    Vue.use(Card);
    Vue.use(Icon);
    Vue.use(SubmitBar);
    Vue.use(Button);
    import navBar from './child/OrderNav'
    import Address from './child/Address'
    import shoppingCart from './child/shoppingcart'
    import order from './child/order'
    export default {
        name: "ConfirmOrder",
        components:{
            navBar,
            Address,
            shoppingCart,
            order
        },
        data(){
            return{
                cartList:[],
                price:0,
            }
        },
        created(){
            this.$store.state.CartData.forEach((item,index)=>{
                if(item.isActive){
                    this.cartList.push(item)
                    this.price+=item.Price*item.count
                }
            })
        }
    }
</script>

<style scoped>
    .warp{
        background: #eee;
    }
    .content{
        height: calc(100vh - 44px );
        margin-top: 44px;
    }
</style>