<template>
    <div class="order">
        <div class="content" v-for="(item,index) in $store.state.OrderList" v-if="$store.state.OrderList.length>0">
            <div class="orderTop">
                订单完成
            </div>
            <div class="orderBottom">
                <van-card
                        :num=item.count
                        :price=item.Price
                        :desc=item.desc
                        :title=item.title
                        :thumb=item.img
                />
            </div>
            <div class="pricebottom">
                <div>总价<span>￥</span>{{(item.count*item.Price).toFixed(2)}}</div>
                <div>优惠<span>￥</span>0.00</div>
                <div>实付款<span>￥</span>{{(item.count*item.Price).toFixed(2)}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order"
    }
</script>

<style scoped>
.content{
    height: 180px;
    background: #fff;
}
.content .orderTop{
    height: 30px;
    line-height: 30px;
    text-align: right;
    color: #ff5777;
    padding-right: 20px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.2);
}
.content .orderBottom{
    height: 104px;
    background: #ccc;
}
    .pricebottom{
        display: flex;
        height: 46px;
    }
.pricebottom>div{
    flex: 1;
    text-align: center;
    line-height: 46px;
}
.pricebottom>div span{
    color: #999;
    font-size: 12px;
}
</style>