<template>
    <div>
        <template>
            <swiper ref="mySwiper" :options="swiperOptions" class="swiper">

                    <swiper-slide v-for="(item,index) in bannerlist">  <a :href="item.link"><img :src="item.image" alt=""></a></swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </template>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "banner",
        components:{
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop:true,
                    autoplay:{delay:2000},

                },
                bannerlist:[]
            }
        },
        created(){
            this.request({
                url:this.url.multidata,
                method:'get'
            }).then(res=>{
                console.log(res)
                this.bannerlist=res.data.banner.list
            })
        }
    }
</script>

<style scoped>
    .swiper img{
        width: 100%;
        height: 100%;
    }
    .swiper-container{
        --swiper-theme-color: #fff;
    }
</style>