<template>
    <div class="pop">
        <a href="https://act.mogujie.com/zzlx67">
           <img src="~assets/img/home/recommend_bg.jpg"/>
        </a>
    </div>
</template>

<script>
    export default {
        name: "HomePop",
        props:{
            pop:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.pop{
    height: 280px;
}
.pop img{
    width: 100%;
    height: 100%;
}
</style>