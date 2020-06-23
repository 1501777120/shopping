<template>
    <div>
        <UserOrderNav></UserOrderNav>
        <div class="content">
            <order></order>
        </div>
    </div>
</template>

<script>
   import Vue from 'vue';
    import { Card,Button} from 'vant';
    Vue.use(Card);
    Vue.use(Button);
    import UserOrderNav from './child/UserOrderNav'
    import Order from './child/order'
    export default {
        name: "Userorder",
        components:{
            UserOrderNav,
            Order,
        }
    }
</script>

<style scoped>
.content{
    margin-top: 44px;
}
</style>