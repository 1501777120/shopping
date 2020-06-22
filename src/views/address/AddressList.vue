<template>
    <div>
        <van-address-list
                v-model="$store.state.chosenAddressId"
                :list="$store.state.AddressList"
                default-tag-text="默认"
                @add="onAdd"
                @edit="onEdit"
        />
    </div>
</template>

<script>
    import Vue from 'vue';
    import { AddressList,Toast } from 'vant';
    Vue.use(AddressList);
    Vue.use(Toast);
    export default {
        name: "AddressEdit",
        data(){
            return{
            }
        },
        methods: {
            onAdd() {
                Toast('新增地址');
            },
            onEdit(item, index) {
                Toast('编辑地址:' + index);
            },
        },
    }
</script>

<style scoped>

</style>