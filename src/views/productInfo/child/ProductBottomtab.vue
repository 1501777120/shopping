<template>
    <div class="tabBar">
        <div class="left">
            <div class="item">
                <div class="icon"><img src="~assets/img/detail/detail_bottom.png"/></div>
                <span>客服</span>
            </div>
            <div class="item" >
                <div class="icon"><img src="~assets/img/detail/detail_bottom.png"/></div>
                <span>店铺</span>
            </div>
            <div class="item " @click="isCollect">
                <div class="icon"><img src="~assets/img/detail/detail_bottom.png" :class="{itemActive:isCollects}"/></div>
                <span>收藏</span>
            </div>
        </div>
        <div class="right">
            <div class="content">
               <div class="addShop" @click="tapCart">加入购物车</div>
                <div class="shop">购买</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductBottomtab",
        data(){
            return{
                isCollects:false
            }
        },
        methods:{
            isCollect(){
                this.isCollects=!this.isCollects
            },
            tapCart(){
                this.$emit('tapCart')
            }
        }
    }
</script>

<style scoped>
.tabBar{
    display: flex;
    height: 58px;
    background-color: #fff;
}
    .tabBar .left,.right{
        flex: 1;
        display: flex;
    }
.tabBar .left  .item{
    flex: 1;
    text-align: center;
}
.tabBar .left  .item .icon{
    width: 30px;
    height: 30px;
    overflow: hidden;
    margin:4px auto 0;
}
.tabBar .left  .item .icon img{
    width: 100%;
 }
.tabBar .left  .item:nth-child(1) .icon img{
    margin-top: -72px;
}
.tabBar .left  .item:nth-child(2) .icon img{
    margin-top: -135px;
}
.itemActive{
    margin-top: -36px
}
.right {
    position: relative;
}
.right .content{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin:auto;
        text-align: center;
        height: 26px;
    }

    .addShop{
        display: inline-block;
        width: 50%;
        text-align: center;
        line-height: 26px;
        color: #fff;
        font-size: 15px;
        background-color: darkorange;
        border-radius: 8px 0 0 8px;
    }
    .shop{
        display: inline-block;
        width: 50%;
        line-height: 26px;
        text-align: center;
        color: #fff;
        font-size: 15px;
        background-color: orangered;
        border-radius: 0 8px 8px 0 ;
    }
</style>