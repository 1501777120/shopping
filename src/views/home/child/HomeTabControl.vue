<template>
    <div class="home-tab">
        <div v-for="(item,index) in tabControl" :key="index" class="tab-control" :class="{active:index==isActive}" @click="tabClick(index)">
            <span >{{item}}</span>
        </div>
    </div>
</template>

<script>
    const  data={ isActive:0}
    export default {
        name: "HomeTabControl",
        props:{
            tabControl:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return data
        },
        methods:{
            tabClick(val){
                this.isActive=val
                this.$emit("tabClick",val)
            },
        }
    }
</script>

<style scoped>
.home-tab{
    width: 100vw;
    display: flex;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 14px;
}
.tab-control{
    flex: 1;
}
.active{
        color: #ff5777;
    }
span{
    padding: 5px 8px;
}
.active span{
    border-bottom: 3px solid #ff5777;
}
</style>