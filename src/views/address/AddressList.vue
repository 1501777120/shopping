<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="left" >
                <img src="../../assets/img/common/back.svg"/>
            </div>
            <div slot="content">我的收货地址</div>
            <div slot="right" class="right" >
                <router-link to="/addressEdit">添加</router-link>
            </div>
        </nav-bar>
        <div class="warp" ref="warp">
            <div class="content">
                <van-address-list
                        v-model="$store.state.chosenAddressId"
                        :list="$store.state.AddressList"
                        default-tag-text="默认"
                        @add="onAdd"
                        @edit="onEdit"
                        @select="onSelect"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from '../../components/navBar/NavBar'
    import Vue from 'vue';
    import { AddressList,Toast } from 'vant';
    Vue.use(AddressList);
    Vue.use(Toast);
    export default {
        name: "AddressEdit",
        components:{
            navBar
        },
        data(){
            return{
            }
        },
        methods: {
            onAdd() {
                Toast('新增地址');
                this.$router.push("/addressEdit")
            },
            onEdit(item, index) {
                Toast('编辑地址:');
                this.$router.push({
                    name:'AddEdit',
                    params:{
                        index:index
                    }
                })
            },
            onSelect(item,index){
                console.log(item);
                this.$store.commit('chageAddressisDefault',item)
                this.$router.push('/ConfirmOrder')
            },
        },
    }
</script>

<style scoped>
    .nav-bar{
        background: #fff;
    }
    .nav-bar  .left img{
        vertical-align: middle;
    }
    .nav-bar  .right{
        font-size: 10px;
    }
    .warp{
        margin-top: 44px;
    }

</style>