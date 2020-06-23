<template>
    <div>
        <van-submit-bar :price="$store.state.TotalPrice *100" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="$store.state.Checked" @click.stop="isChecked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Toast } from 'vant';
    Vue.use(Toast);
    export default {
        name: "CartTabBar",
        data(){
            return{

            }
        },

        methods:{
            onSubmit(){
                if(this.$store.state.CartData.length==0){
                    Toast('当前购物车还没有商品，快去添加吧');
                    return false
                }else {
                    this.$router.push({
                        name:"ConfirmOrder",
                    })
                }
            },
            isChecked(){
                    this.$store.commit('publicActive')
            }
        },

    }
</script>

<style scoped>

</style>