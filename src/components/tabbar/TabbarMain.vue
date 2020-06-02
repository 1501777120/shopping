<template>
    <div>
        <Tabbar>
                <tabbar-item path="/home">
                    <div slot="item-img"><img src="~assets/img/tabbar/home.svg"/></div>
                    <div slot="item-active-img"><img src="~assets/img/tabbar/home_active.svg"/></div>
                    <div slot="item-text">首页</div>
                </tabbar-item>
                <tabbar-item path="/category">
                    <div slot="item-img"><img src="~assets/img/tabbar/category.svg"/></div>
                    <div slot="item-active-img"><img src="~assets/img/tabbar/category_active.svg"/></div>
                    <div slot="item-text">分类</div>
                </tabbar-item>
                <tabbar-item path="/cart">
                    <div slot="item-img"><img src="~assets/img/tabbar/cart.svg"/></div>
                    <div slot="item-active-img"><img src="~assets/img/tabbar/cart_active.svg"/></div>
                    <div slot="item-text">购物车</div>
                </tabbar-item>
                <tabbar-item path="/user">
                    <div slot="item-img"><img src="~assets/img/tabbar/profile.svg"/></div>
                    <div slot="item-active-img"><img src="~assets/img/tabbar/profile_active.svg"/></div>
                    <div slot="item-text">用户</div>
                </tabbar-item>
        </Tabbar>
    </div>
</template>

<script>
    import Tabbar from '../tabbar/Tabar'
    import TabbarItem from '../tabbar/TabbarItem'
    export default {
        name: "TabbarMain",
        components:{
            Tabbar,
            TabbarItem
        }
    }
</script>

<style scoped>

</style>