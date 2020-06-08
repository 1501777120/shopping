<template>
    <div class="info">
        <h3 class="title">{{productItemInfo.title}}</h3>
        <div class="price">
            <span class="price1">{{productItemInfo.price}}</span>
            <span class="oldPrice">{{productItemInfo.oldPrice}}</span>
            <span class="discountDesc">{{productItemInfo.discountDesc}}</span>
        </div>
        <div class="columns">
            <span v-for="(item,index) in productItemInfo.columns" :key="index" class="item">{{item}}</span>
        </div>
        <div class="services">
            <div v-for="(item,index) in productItemInfo.services" class="servicesInfo">
                <img :src="requesticon(item.icon)" alt="">
                {{item.name}}
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductItemInfo",
        props:{
            productItemInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            requesticon(icon){
                if(icon){
                    return icon
                } else {
                    return "//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"
                }
            }
        }
    }
</script>

<style scoped>
    .info{
        width: 100vw;
    }
.title{
    padding: 4px 4px;
}
    .price{
        width: 100vw;
        height: 40px;
        line-height: 40px;
    }
    .price1{
        color: #ff5777;
        font-size: 18px;
        margin-left: 18px;
    }
    .oldPrice{
        padding-left: 20px;
        color: #999;
        font-size: 13px;
        text-decoration: line-through;
    }
.discountDesc{
    margin-left: 20px;
    color: #fff;
    font-size: 14px;
    background: #ff5777;
    width: 26px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 6px;
}
    .columns{
        display: flex;
        font-size: 13px;
        border-bottom: 1px solid #666;
        margin: 0 10px ;
        padding-bottom: 10px;
    }
    .columns span{
        flex:1;
        color: #999;
    }
    .services{
        display: flex;
        flex-wrap: wrap;
        font-size:0.75rem;
        justify-content: space-between;
        margin: 0 10px ;
        padding-bottom: 10px;
        border-bottom: 5px solid rgba(100,100,100,.2);
    }
    .servicesInfo{
        width: 33%;
        margin-top: 10px;
    }
    .servicesInfo img{
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }

</style>