<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="left" >
                <img src="../../assets/img/common/back.svg"/>
            </div>
            <div slot="content">添加收货地址</div>
            <div slot="right" class="right" @click="onSave">
                保存
            </div>
        </nav-bar>
        <div class="warp">
            <van-address-edit
                    :area-list="areaList"
                    show-postal
                    show-delete
                    show-set-default
                    show-search-result
                    :search-result="searchResult"
                    :area-columns-placeholder="['请选择', '请选择', '请选择']"
                    @save="onSave"
                    @delete="onDelete"
                    @change-detail="onChangeDetail"
            />
        </div>
    </div>
</template>

<script>
    import areaList from '../../assets/js/areaList'
    import navBar from '../../components/navBar/NavBar'
    import Vue from 'vue';
    import { AddressEdit,Toast } from 'vant';
    Vue.use(AddressEdit);
    Vue.use(Toast);
    export default {
        name: "AddressEdit",
        components:{
            navBar
        },
        data(){
            return{
                areaList,
                searchResult: [],
                Address:{
                    id:'',
                    name:'',
                    tel:'',
                    address:'',
                    isDefault:false
                },
                addressDetail:'',
            }
        },
        methods: {
            onSave() {
                Toast('save');
                this.$router.push('/addressList')
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {

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
    .nav-bar  .right a{
        color: #ff5777;
    }
    .warp{
        margin-top: 44px;
    }
</style>