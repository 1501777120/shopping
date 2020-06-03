<template>
    <div class="goods-show" >
        <div v-for="(item,index) in goodsshow" class="goods">
            <img :src="item.show.img" alt="">
            <div class="show-bottom">
                <p class="title">{{item.title}}</p>
                <span class="price">￥{{item.price}} </span>
                <span class="like">{{item.cfav | showprice }}</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "HomeGoodsShow",
        props:{
            goodsshow:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
          return{

          }
        },
        filters:{
            showprice(val){
                return val>10000 ? (val/10000).toFixed(2)+'万':val
            }
        }
    }
</script>

<style scoped>
.goods-show{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
    .goods{
        position: relative;
        width: 48%;
        box-shadow: 0 0 1px rgba(100,100,100,.6);
        margin-bottom: 5px;
        padding-bottom: 40px;
    }
    .goods img{
        box-sizing: border-box;
        padding: 5px;
        width: 100%;
    }
    .title{
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #333;
    }
    .price{
        margin-left: 20%;
        margin-right:6%;
        font-size: 14px;
        color: #ff5777;
    }
.goods .like{
        font-size: 13px;
        color: #333;
    }
.goods .like::before{
       /* content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        background-color: red;*/
        content: "";
        width: 14px;
        height: 14px;
        display: inline-block;
        background-image: url("~assets/img/common/collect.svg");
        background-size: 14px 14px;
        margin-top: 3px;
     }
.show-bottom{
    width: 100%;
    position: absolute;
    bottom: 3px;


}
</style>