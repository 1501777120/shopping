<template>
    <div>
        <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
            <swiper-slide v-for="(item,index) in bannerList" :key="index">
                <img :src="item" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "ProductBanner",
        components:{
            Swiper, SwiperSlide,
        },
        data(){
            return{
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop:true,
                    autoplay:{delay:2000},
                }
            }
        },
        mounted(){

        },
        props:{
            bannerList:{
                type:Array ,
                default(){
                    return []
                }
            },
        },
        methods:{

        }
    }
</script>

<style scoped>
.swiper{
    height: 300px;
}
.swiper img{
    width: 100%;
}

</style>