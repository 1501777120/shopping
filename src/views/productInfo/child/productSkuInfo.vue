<template>
    <div class="skuInfo">
        <div class="sizeKey">
            <div v-for="(item,index) in productSkuInfo.sizeKeyList" class="sizeItems">
                <div v-for="(items,index) in item" class="item">{{item[index]}}</div>
            </div>
        </div>
        <div class="set">
            <div class="setItem" v-for="(item,index) in productSkuInfo.setList">
                <div  class="item">
                    {{item.key}}
                </div>
                <div class="item">
                    {{item.value}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "productSkuInfo",
        props:{
            productSkuInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
    }
</script>

<style scoped>
.skuInfo{
    margin: 10px 10px 0 10px;
}
    .sizeKey .sizeItems{
        display: flex;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 2px solid rgba(100,100,100,.2);
    }
    .sizeKey .sizeItems, .item{
        flex: 1;
    }
    .sizeItems .item:first-child{
        width: 25%;
    }
    .setItem{
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid rgba(100,100,100,.2);
    }
.setItem .item{
    display: inline-block;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

}
    .setItem .item:nth-child(1){
        width: 25%;
        text-align: center;
    }
    .setItem .item:nth-child(2){
        width: 75%;
        font-size: 14px;
        color: #ff5777;
    }
</style>