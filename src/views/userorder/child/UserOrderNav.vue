<template>
    <div>
        <OrderNav>
            <div slot="left" class="left">
                <img src="~assets/img/common/back.svg"/>
            </div>
            <div slot="content">
                我的订单
            </div>
        </OrderNav>
    </div>
</template>

<script>
    import OrderNav from '../../../components/navBar/NavBar'
    export default {
        name: "UserOrderNav",
        components:{
            OrderNav
        }
    }
</script>

<style scoped>
.left img{
    vertical-align: middle;
}
</style>