<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="left" >
                <img src="../../assets/img/common/back.svg"/>
            </div>
            <div slot="content">修改收货地址</div>

        </nav-bar>
        <div class="warp">
            <van-address-edit
                    :area-list="areaList"
                    :address-info="addressInfo"
                    show-postal
                    show-delete
                    show-set-default
                    show-search-result
                    :search-result="searchResult"
                    :area-columns-placeholder="['请选择', '请选择', '请选择']"
                    @save="onSave"
                    @delete="onDelete"
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
        name: "AddEdit",
        components:{
            navBar
        },
        data(){
            return{
                areaList,
                searchResult: [],
                addressInfo:{
                    id:'',
                    name:'',
                    tel:'',
                    postalCode:'',
                    address:'',
                    isDefault:false
                },
                addressDetail:'',
            }
        },
        mounted(){
            this.addressInfo=this.$store.state.AddressList[this.$route.params.index]
        },
        methods: {
            onSave(content) {
                this.addressInfo.name=content.name
                this.addressInfo.tel=content.tel
                this.addressInfo.postalCode=content.postalCode
                this.addressInfo.address=content.province+content.city+content.county+content.addressDetail
                this.addressInfo.isDefault=content.isDefault
                this.$store.commit("chageAddress",this.addressInfo)
                Toast('save');
                this.$router.replace('/addressList')
            },
            onDelete(content) {
                this.$store.commit("deleteAddress",this.addressInfo)
                Toast('删除成功');
                this.$router.replace('/addressList')
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