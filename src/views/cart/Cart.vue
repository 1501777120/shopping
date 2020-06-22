<template>
    <div>
       <cartnav-bar></cartnav-bar>
        <div class="warp" ref="warp">
            <div class="content">
                <cart-item ></cart-item>
            </div>
        </div>
        <cart-tab></cart-tab>
    </div>
</template>

<script>
    import BScrllo from 'better-scroll'
    import CartnavBar from './child/CartNav'
    import CartItem from './child/CartItem'
    import CartTab from './child/CartTabBar'
    import Vue from 'vue';
    import { Checkbox,CheckboxGroup,Card,SubmitBar,Button } from 'vant';
    Vue.use(Button);
    Vue.use(Checkbox);
    Vue.use(SubmitBar);
    Vue.use(CheckboxGroup);
    Vue.use(Card);
    Vue.use(Button);
    export default {
        name: "Cart",
        components:{
            CartnavBar,
            CartItem,
            CartTab,
        },
        data(){
            return{
                bscrllo:null,
            }
        },
        mounted(){
            this.bscrllo=new BScrllo(this.$refs.warp,{
                click:true,
                scrollY: true,
                pullUpLoad:true,
            })
        }
    }
</script>

<style scoped>
.warp{
    height: calc(100vh - 134px);
    margin-top: 44px;
}
</style>