<template>
    <div class="nav-bar">
        <div class="left" @click="back"><slot name="left"></slot></div>
        <div class="content"><slot name="content"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        methods:{
            back(){
                if(this.$route.path=='/home'){
                    return
                }else{
                    this.$router.back()
                }
            }
        }
    }
</script>

<style scoped>
.nav-bar{
    position:fixed;
    top: 0;
    left:0;
    z-index: 99;
    width: 100vw;
    height: 44px;
    display: flex;
    text-align: center;
    line-height:44px;
    box-shadow: 0 1px 1px rgba(0,0,0,.3);
}
.left,.right{
    width: 60px;
    height: 44px;
}
.content{
    flex: 1;
}
</style>