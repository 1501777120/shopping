<template>
    <div>
        <!--头部导航-->
        <product-nav></product-nav>
        <div class="warp" ref="warp">
            <div class="content">
                <!--banner图-->
                <banner-swiper :bannerList="bannerList" class="bannerswiper"></banner-swiper>
                <!--商品信息-->
                <product-item-info :productItemInfo="productItemInfo"></product-item-info>
                <!--商家信息-->
                <product-shop :productShop="productShop"></product-shop>
                <!--商品图片展示-->
                <product-img-show :productImg="productImg" :bscrllo="bscrllo" ref="imgShow"></product-img-show>
                <!--商品详细信息-->
                <product-sku-info :productSkuInfo="productSkuInfo"></product-sku-info>
            </div>
        </div>
        <!--底部-->
        <bottom-tab @tapCart="tapCart"></bottom-tab>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Toast } from 'vant';
    import 'vant/lib/index.css';
    Vue.use(Toast);
    import BottomTab from  './child/ProductBottomtab'
    import productSkuInfo from  './child/productSkuInfo'
    import ProductShop from  './child/ProductShop'
    import ProductImgShow from  './child/ProductImgShow'
    import ProductItemInfo from "./child/ProductItemInfo"
    import BannerSwiper from "./child/ProductBanner"
    import ProductNav from "./child/ProductNav"
    import BScrllo from 'better-scroll'
    export default {
        name: "ProductInfo",
        data(){
          return{
              imgShow:0,
              bscrllo:null,
              productId:null,
              desc:'',
              imUrl:'',
              Price:'',
              bannerList:[],
              productItemInfo:{
                  title:'',
                  price:'',
                  oldPrice:'',
                  discountDesc:'',
                  columns:[],
                  services:[],
              },
              productShop:{
                  shopLogo:"",
                  shopName:'',
                  cGoods:'',
                  cSells:'',
                  score:[],
              },
              productImg:[],
              productSkuInfo:{
                  sizeKeyList:[],
                  setList:[],
              },
          }
        },
        components:{
            ProductNav,
            BannerSwiper,
            ProductItemInfo,
            ProductShop,
            ProductImgShow,
            productSkuInfo,
            BottomTab,
        },
        mounted(){
            this.bscrllo=new BScrllo(this.$refs.warp,{
                click:true,
                scrollY: true,
                pullUpLoad:true,
            })
            this.productId=this.$route.params.id
            this.request({
                url:this.url.productInfo,
                method:"get",
                params:{
                    iid:this.productId
                }
            }).then(res=>{
                console.log(res)
                this.bannerList=res.result.itemInfo.topImages       //商品轮播图
                this.productItemInfo.title=res.result.itemInfo.title //商品介绍
                this.productItemInfo.price=res.result.itemInfo.price    //商品价格区间
                this.productItemInfo.oldPrice=res.result.itemInfo.oldPrice  //商品老价格
                this.productItemInfo.discountDesc=res.result.itemInfo.discountDesc  //商品折扣
                this.productItemInfo.columns=res.result.columns     //商品收藏量等
                this.productItemInfo.services=res.result.shopInfo.services      //商品服务
                this.productShop.shopLogo=res.result.shopInfo.shopLogo      //商家logo
                this.productShop.shopName=res.result.shopInfo.name      //商家名字
                this.productShop.cGoods=res.result.shopInfo.cGoods      //商家商品数量
                this.productShop.cSells=res.result.shopInfo.cSells      //商家总销售量
                this.productShop.score=res.result.shopInfo.score      //商家信息
                this.productImg=res.result.detailInfo.detailImage[0].list      //商品图片
                this.productSkuInfo.sizeKeyList=res.result.itemParams.rule.tables[0]      //商品尺寸
                this.productSkuInfo.setList=res.result.itemParams.info.set     //商品参数
                this.desc=res.result.itemInfo.desc     //商品说明
                this.imUrl=res.result.itemInfo.imUrl     //商品图片
                this.Price=res.result.itemInfo.lowNowPrice     //商品最终价格
            })
        },
        methods:{
            imgLoadEnd(){
                this.imgShow=this.$refs.imgShow.$el.offsetTop
            },
            tapCart(){
                let CartData={
                    count:1,
                    iid:this.productId,
                    Price:this.Price,
                    title:this.productItemInfo.title,
                    img:this.bannerList[0],
                    desc:this.desc,
                    isActive:true
                }
                this.$store.commit("addCart",CartData)
                Toast.success('添加成功');
            }
        }
    }
</script>

<style scoped>
    .warp{
        height: calc(100vh - 102px);
        margin-top: 44px;
        overflow: hidden;
    }
</style>