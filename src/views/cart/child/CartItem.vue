<template>
    <div>
        <div v-if="isShow">
            <div v-for="(item, index) in $store.state.CartData" :key="index" class="item">
                <van-checkbox v-model="item.isActive" @change="changeIsActive(index)">
                    <van-card
                            :num="item.count"
                            :price="item.Price"
                            :desc="item.desc"
                            :title="item.title"
                            :thumb="item.img"
                            @click="tapProductInfo(item.iid)"
                    >
                        <template #footer>
                            <van-button size="mini" v-if="item.count>0" type="info"  @click.stop=" decreaseCount(index)">-</van-button>
                            <van-button size="mini" v-else type="info" disabled @click.stop=" decreaseCount(index)">-</van-button>
                            <van-button  size="mini" type="info" @click.stop="addCount(index)">+</van-button>
                        </template>
                    </van-card>
                </van-checkbox>
            </div>
        </div>
        <div  class="isShow" v-else>
            <div>
                <p>购物车没有商品</p>
                <router-link to="/home" >快去逛逛吧</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        data(){
            return{
                isShow:true,
                radio:'1',
            }
        },
        created(){
            if(this.$store.state.CartData.length>0){
                this.isShow=true
            }else {
                this.isShow=false
            }
        },
        methods:{
            tapProductInfo(val){
                this.$router.push({
                    name:"ProductInfo",
                    params:{id:val}
                })
            },
            changeIsActive(val){
                this.$store.commit('ifActive')
            },
            decreaseCount(val){
                this.$store.commit('decreaseCount',val)
            },
            addCount(val){
                this.$store.commit('addCount',val)
            }

        }
    }
</script>

<style scoped>
    .item{
        margin-bottom: 10px;
        padding-left: 10px;
    }
    .van-card{
        width: calc(100vw - 48px);
    }
    .van-card__title {
        font-size: 16px;
        height: 32px;
        font-weight: 500;
        line-height: 32px;
    }
     .van-card__desc, .van-card__title {
         word-wrap: break-word;
     }

     .van-multi-ellipsis--l2 {
         display: -webkit-box;
         overflow: hidden;
         text-overflow: ellipsis;
         -webkit-line-clamp: 1;
         -webkit-box-orient: vertical;
     }
    .van-button--mini {
        font-size: 18px;
    }
    .isShow{
        position: relative;
        width: 100vw;
        height:calc(100vh - 44px);
        text-align: center;
    }
    .isShow div{
        height: 60px;
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .isShow div p{
        height: 30px;
        line-height: 30px;
    }
    .isShow div a{
        height: 30px;
        line-height: 30px;
        color: blue;
    }
</style>