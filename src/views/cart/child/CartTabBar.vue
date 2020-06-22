<template>
    <div>
        <van-submit-bar :price="$store.state.TotalPrice *100" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="$store.state.Checked" @click.stop="isChecked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
    export default {
        name: "CartTabBar",
        data(){
            return{

            }
        },

        methods:{
            onSubmit(){
               console.log(123)
                this.$router.push({
                    name:"ConfirmOrder",

                })
            },
            isChecked(){
                this.$store.commit('publicActive')
            }
        },

    }
</script>

<style scoped>

</style>