<template>
    <div >
        <pro-nav class="navbar">
            <div slot="left" class="left">
                <img src="~assets/img/common/back.svg"/>
            </div>
            <div slot="content">
                详情页
            </div>
        </pro-nav>
    </div>
</template>

<script>
   import ProNav from '../../../components/navBar/NavBar'
    export default {
        name: "ProductNav",
        components:{
            ProNav,
        },
    }
</script>

<style scoped>
    .navbar{
        background-color: #fff;
    }
.left img{
    vertical-align: middle;
}
</style>