<template>
    <div>
        <nav-bar></nav-bar>
        <banner :bannerlist=bannerlist class="swiper"></banner>
        <recommend :recommend=recommend></recommend>
        <HomePop></HomePop>
        <home-tab-control :tabControl="['流行','新款','精选']" @tabClick="tabClick"></home-tab-control>
        <goods-show :goodsshow="goodsdata[clickType].list"></goods-show>
    </div>
</template>

<script>
    import GoodsShow from './child/HomeGoodsShow'
    import HomeTabControl from './child/HomeTabControl'
    import HomePop from './child/HomePop'
    import Recommend from './child/HomeRecommend'
    import NavBar from './child/HomeNavBar'
    import Banner from './child/HomeBanner'
    export default {
        name: "home",
        components:{
            NavBar,
            Banner,
            Recommend,
            HomePop,
            HomeTabControl,
            GoodsShow,
        },
        data(){
            return{
                bannerlist:[],//轮播图数据
                recommend:[],//推荐数据
                goodsdata: {
                    pop:{
                        page:1,list:[]
                    },//流行
                    new:{
                        page:1,list:[]
                    },//新品
                    sell:{
                        page:1,list:[]
                    },//精选
                },//显示商品数据
                clickType:"pop"
            }
        },
        created(){
            this.getbanneraddrecommend()
            this.getgoodsshow("pop")
            this.getgoodsshow("new")
            this.getgoodsshow("sell")
        },
        methods:{
            getbanneraddrecommend(){
                this.request({
                    url:this.url.multidata,
                    method:'get'
                }).then(res=>{
                    console.log(res)
                    this.bannerlist=res.data.banner.list
                    this.recommend=res.data.recommend.list
                    this.pop=res.data.dKeyword.list
                })
            },//获取banner和流行图片
            getgoodsshow(type){
                let page=this.goodsdata[type].page
                this.request({
                    url:this.url.goodsdata,
                    method: 'get',
                    params:{
                        type:type,
                        page:page
                    }
                }).then(res=>{
                    console.log(res.data.list);
                    this.goodsdata[type].list= this.goodsdata[type].list.concat(res.data.list)
                })
            },//获取商品显示图片
            tabClick(val){
                console.log(val)
                if(val==0){
                    this.clickType="pop"
                }else if(val ==1){
                    this.clickType="new"
                }else{
                    this.clickType="sell"
                }
            }
        }

    }
</script>

<style scoped>
.swiper{
    margin-top: 44px;
}
</style>