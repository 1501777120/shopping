<template>
    <div class="home-recommend">
        <div v-for="(item,index) in recommend" class="recommend">
            <a :href="item.link">
                <img :src="item.image" alt="推荐图片">
                <div class="title">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.home-recommend{
    display: flex;
    text-align: center;
    padding-bottom: 6.66667vw;
    border-bottom: 2.13333vw solid #eee;
}
.recommend{
    flex: 1;

}
.home-recommend img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top:2.66667vw;
}
.title{
    color: #666;
    font-size: 13px;
    margin-top:2.66667vw;
}
</style>