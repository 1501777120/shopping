<template>
    <div class="productShop">
        <div class="shop">
            <img :src="productShop.shopLogo"/>
            <span><b>{{productShop.shopName}}</b></span>
        </div>
        <div class="shopContent">
            <div class="cGoodsSells">

                <div class="cSells">
                    <span>{{productShop.cSells | cGoodsSells}}</span>
                    <span>总销量</span>
                </div>
                <div class="cGood">
                    <span>{{productShop.cGoods | cGoodsSells}}</span>
                    <span>全部宝贝</span>
                </div>
            </div>
            <div class="score">
                    <table>
                        <tr v-for="(item,index) in productShop.score" :key="index">
                            <td class="name">{{item.name}}</td>
                            <td class="scores" :class="{activeScores:item.isBetter}">{{item.score}}</td>
                            <td class="isBetter" :class="{activeIsBetter:item.isBetter}">{{item.isBetter | isBetter}}</td>
                        </tr>
                    </table>
            </div>

        </div>
        <div class="shopBottom">
            <div class="sbom">进店逛逛</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductShop",
        props:{
            productShop:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        filters:{
            cGoodsSells(val){
                return val>10000? (val/10000).toFixed(2)+'万':val
            },
            isBetter(val){
                return val ? "高":"低"
            }
        }
    }
</script>

<style scoped>
.productShop{
  margin: 0 10px;
    padding-bottom: 20px;
    border-bottom: 5px solid rgba(100,100,100,.2);
}
.shop{
     padding: 20px 0;
 }
    .shop img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid rgba(100,100,100,.1);
        vertical-align: middle;
    }
    .shop span{
        padding-left: 10px;
    }
    .shopContent{
        display: flex;
    }
    .cGoodsSells,.score{
        flex: 1;
    }
    .cGoodsSells{
        display: flex;
        border-right: 1px solid rgba(100,100,100,.2);
    }
   .cGoodsSells .cGood,.cSells{
       flex: 1;
       text-align: center;
   }
    .cGoodsSells span{
        display: block;
    }
    .cGoodsSells span:nth-child(1){
        color: #999;
        font-size: 18px;
        padding-top: 16px;
    }
     .cGoodsSells span:nth-child(2){
         font-size: 13px;
     }
    .score{
        text-align: center;
        font-size: 14px;
    }
    .score .name{
        padding-left: 20px;
    }
    .score .scores{
        color: greenyellow;
    }

    .score .isBetter{
        color: #fff;
        background-color: greenyellow;
    }
    .score .activeScores{
        color: #ff5777;
    }
    .score .activeIsBetter{
        background-color: #ff5777;
    }
    .sbom{
        margin-top: 20px;
        margin-left: 25%;
        text-align: center;
        width: 50%;
        height: 30px;
        line-height: 30px;
        background-color: rgba(0,0,0,.2);
        border-radius: 6px;
        border: 1px solid rgba(100,100,100,.3);
    }
</style>