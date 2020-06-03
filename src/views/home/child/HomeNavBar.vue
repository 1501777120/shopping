<template>
    <div class="nav-bar">
        <navbar>
            <div slot="content">购物街</div>
        </navbar>
    </div>
</template>

<script>
    import Navbar from '../../../components/navBar/NavBar'
    export default {
        name: "NavBar",
        components:{
            Navbar
        }
    }
</script>

<style scoped>
.nav-bar{
    color: #fff;
    background-color: #ff5777;
}
</style>