<template>
    <div class="tabbar-item" @click="itemCilck">
        <div class="item-img" v-if="isActiveimg"><slot name="item-img"></slot></div>
        <div class="item-img" v-else><slot name="item-active-img"></slot></div>
        <div class="item-text" :style="isActive" ><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        data(){
            return{

            }
        },
        props:{
          path:{
              type:String,
              required:true,
          },
            color:{
                type: String,
                default:'#ff5777'
            }
        },
        methods:{
            itemCilck(){
                if(this.$route.path==this.path){
                    return
                }else{
                    this.$router.push({
                        path:this.path
                    })
                }
            }
        },
        computed:{
            isActiveimg(){
                return this.$route.path!==this.path
            },
            isActive(){
                return !this.isActiveimg ? {color: this.color}:''
            },

        },
    }
</script>

<style scoped>
    .tabbar-item{
        height: 49px;
        flex: 1;
        text-align: center;
    }
    .item-img img{
        width: 24px;
        height: 24px;
        display: block;
        margin:5px auto 0 auto;
    }
    .item-text{
        font-size: 13px;
    }
</style>