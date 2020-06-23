<template>
    <div >
        <div class="card" v-for="(item,index) in cartList">
            <van-card
                    :num=item.count
                    :price=item.Price
                    :desc=item.desc
                    :title=item.title
                    :thumb=item.img
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "shoppingcart",
        data(){
            return{

            }
        },
        props:{
            cartList:{
                type:Array,
                default:[],
            }
        },
        mounted(){

        },
    }
</script>

<style scoped>
.card{
    margin-top: 10px;
}
</style>