<template>
    <div>
        <user-nav></user-nav>
        <div class="warp">
            <ul >
                <li class="item"><router-link to="">我的订单</router-link></li>
                <li class="item"><router-link to="/addressList">地址管理</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>

    import UserNav from './child/UserNav'
    export default {
        name: "user",
        components:{
            UserNav,
        }
    }
</script>

<style scoped>
    .warp{
        margin-top: 44px;

    }
    .item{
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid rgba(100,100,100,.2);
    }
</style>