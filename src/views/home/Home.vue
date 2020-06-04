<template>
    <div>
        <!--头部导航-->
        <nav-bar></nav-bar>
        <home-tab-control  :tabControl="['流行','新款','精选']" @tabClick="tabClick" class="home-tab-control" v-show="isTabControl"></home-tab-control >
        <div class="warp" ref="warp">
            <div class="content">
                <!--轮播图-->
                <banner :bannerlist=bannerlist class="swiper"  @bannerLoad="bannerLoad"></banner>
                <!--推荐-->
                <recommend :recommend=recommend></recommend>
                <!--本周流行-->
                <HomePop></HomePop>
                <!--商品选择-->
                <home-tab-control :tabControl="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"></home-tab-control>
                <!--商品显示-->
                <goods-show :goodsshow="goodsdata[clickType].list" :bscrllo="bscrllo"></goods-show>
            </div>
        </div>
        <!--返回顶部-->
        <back-top @click.native="backTop" v-show="isBackTop"></back-top>
    </div>
</template>

<script>
    import BScrllo from 'better-scroll'
    import BackTop from './child/HomeBackTop'
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
            BackTop,
        },
        data(){
            return{
                bscrllo:null,//
                tabControloffsetTop:0,
                isTabControl:false,
                isBackTop:false,
                bannerlist:[],//轮播图数据
                recommend:[],//推荐数据
                goodsdata: {
                    pop:{
                        page:0,list:[]
                    },//流行
                    new:{
                        page:0,list:[]
                    },//新品
                    sell:{
                        page:0,list:[]
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
        mounted(){
            this.bscrllo=new BScrllo(this.$refs.warp,{
                click:true,
                scrollY: true,
                pullUpLoad:true,
            })
            this.bscrllo.on('pullingUp',()=>{
                this. getgoodsshow(this.clickType)
            })
            this.bscrllo.on('scroll',(o)=>{
                this.isBackTop=-o.y>1500
                this.isTabControl=-o.y>this.tabControloffsetTop-this.$refs.tabControl.$el.offsetHeight
            })

        },
        methods:{
            bannerLoad(){
                this.tabControloffsetTop=this.$refs.tabControl.$el.offsetTop
            },
            getbanneraddrecommend(){
                this.request({
                    url:this.url.multidata,
                    method:'get'
                }).then(res=>{
                    this.bannerlist=res.data.banner.list
                    this.recommend=res.data.recommend.list
                    this.pop=res.data.dKeyword.list
                })
            },//获取banner和流行图片
            getgoodsshow(type){
                let page=++this.goodsdata[type].page
                this.request({
                    url:this.url.goodsdata,
                    method: 'get',
                    params:{
                        type:type,
                        page:page
                    }
                }).then(res=>{
                    this.goodsdata[type].list= this.goodsdata[type].list.concat(res.data.list)
                    this.bscrllo.finishPullUp()
                })
            },//获取商品显示图片
            tabClick(val){
                const ScroolY=-this.tabControloffsetTop+this.$refs.tabControl.$el.offsetHeight
                if(val==0){
                    this.clickType="pop",
                    this.bscrllo.scrollTo(0,ScroolY , 0,)
                }else if(val ==1){
                    this.clickType="new"
                    this.bscrllo.scrollTo(0,ScroolY, 500,)
                }else{
                    this.clickType="sell"
                    this.bscrllo.scrollTo(0,ScroolY, 500,)
                }
            },//选择商品显示类型
            backTop(){
                this.bscrllo.scrollTo(0,0, 500,)
            },//返回顶部

        }

    }
</script>

<style scoped>
.warp{
    height: calc(100vh - 93px);
    overflow: hidden;
    margin-top: 44px;
}
    .home-tab-control{
        position: fixed;
        z-index: 99;
        background-color: #fff;
    }
</style>