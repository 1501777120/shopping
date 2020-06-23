<template>
    <div>
        <div class="address" @click="tapAddressList">
            <div class="left">
                <van-icon name="location-o"  color="#ff5777"  />
            </div>
            <div class="right">
                <div class="contentTop">
                    <div class="addressName">{{Address.name}}</div>
                    <div class="tel">{{Address.tel}}</div>
                </div>
                <div class="contentButtom">
                    <p>
                        {{Address.address}}
                    </p>
                </div>
            </div>
            <div class="edit">
                <van-icon name="edit" color="#ff5777"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Address",
        data() {
            return {
                Address:{},
            }
        },
        created(){
            this.$store.state.AddressList.forEach(item=>{
                if(item.isDefault){
                    this.Address=item
                }
            })
        },
        methods: {
            tapAddressList(){
                this.$router.push('/AddressList')
            }
        },
    }
</script>

<style scoped>
.address{
    display: flex;
    width:100vw;
    margin:auto;
    background: #fff;
    border-radius:5px ;
    height: 80px;
}
    .left{
        margin-top: 10px;
        width: 10vw;
        text-align: center;
    }
    .left .van-icon-location-o{
        font-size: 24px;
        line-height: 70px;
    }
    .right{
        margin-top: 10px;
        width: 80vw;
    }
    .contentTop{
        display: flex;
        height: 30px;
        font-size: 18px;
        line-height: 30px;
    }
    .contentTop .addressName{
        padding-right: 30px;
    }
    .contentButtom{
        font-size: 14px;
    }
    .edit{
        margin-top: 10px;
        width: 10vw;
        text-align: center;
    }
    .edit .van-icon-edit{
        font-size: 24px;
        margin: auto;
        line-height: 70px;

    }
</style>