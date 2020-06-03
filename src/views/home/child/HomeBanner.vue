<template>
    <div>
            <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
                    <swiper-slide v-for="(item,index) in bannerlist">  <a :href="item.link"><img :src="item.image" alt=""></a></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "HomeBanner",
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
            }
        },
        props:{
          bannerlist:{
              type:Array,
              default(){
                  return []
              }
          }
        },
    }
</script>

<style scoped>
    .swiper{
        margin-bottom: 4px;
    }
    .swiper img{
        width: 100%;
        height: 100%;
    }
    .swiper-container{
        --swiper-theme-color: #fff;
    }
</style>