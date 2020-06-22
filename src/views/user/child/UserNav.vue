<template>
    <div>
        <nav-bar>
            <div slot="left" class="left">
                <img src="~assets/img/common/back.svg"/>
            </div>
            <div slot="content">
                我的
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import navBar from "../../../components/navBar/NavBar"
    export default {
        name: "UserNav",
        components:{
            navBar,
        }
    }
</script>

<style scoped>
    .left img{
        vertical-align: middle;
    }
</style>