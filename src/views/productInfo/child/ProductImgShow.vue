<template>
    <div class="imgShows">
        <div class="title">图片展示</div>
        <div class="imgShow">
            <img :src="item" v-for="(item ,index) in productImg" @load="ImgLoad"/>
        </div>
        <div class="broBottom"></div>
    </div>
</template>

<script>
    export default {
        name: "ProductImgShow",
        props:{
            productImg:{
                type:Array,
                default(){
                    return []
                }
            },
            bscrllo:{
                type:Object,
                default(){
                    return {}
                },
            },
        },
        methods:{
            ImgLoad(){
                this.bscrllo.refresh()
            }
        }
    }
</script>

<style scoped>
.title{
    text-align: center;
    padding: 16px 0;

}
    .imgShow img{
        width: 100%;
    }
.broBottom{
    margin: 0 10px;
    border-bottom: 5px solid rgba(100,100,100,.2);
}
</style>