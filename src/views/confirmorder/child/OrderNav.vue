<template>
    <div class="nav">
        <order>
                <div slot="left" class="left">
                    <img src="~assets/img/common/back.svg"/>
                    <span>确认订单</span>
                </div>
        </order>
    </div>
</template>

<script>
    import Order from '../../../components/navBar/NavBar'
    export default {
        name: "OrderNav",
        components:{
            Order
        }
    }
</script>

<style scoped>
    .nav{
        background: #fff;
    }
    .left{
        width: 100vw;
        text-align: left;
    }
    .left img{
        vertical-align: middle;
    }

</style>