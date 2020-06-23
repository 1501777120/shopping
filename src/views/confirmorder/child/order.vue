<template>
    <div>
        <van-submit-bar :price=price*100 button-text="提交订单" @submit="onSubmit" />
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Toast } from 'vant';
    Vue.use(Toast);
    export default {
        name: "order",
        props:{
            price:{
                type:Number,
                default:0.00
            }
        },
        methods:{
            onSubmit(){
                 this.$store.commit('deletCartData')
                 Toast('付款成功')
                this.$router.replace('/home')
            }
        }
    }
</script>

<style scoped>

</style>