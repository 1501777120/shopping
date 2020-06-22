<template>
    <div>
        <cart-nav-bar>
            <div slot="left" class="left">
                <img src="~assets/img/common/back.svg"/>
            </div>
            <div slot="content">
                购物车
            </div>
        </cart-nav-bar>
    </div>
</template>

<script>
    import  CartNavBar from   '../../../components/navBar/NavBar'
    export default {
        name: "CartNav",
        components:{
            CartNavBar
        }
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