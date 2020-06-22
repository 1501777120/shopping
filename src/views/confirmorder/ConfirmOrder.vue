<template>
    <div>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
    import navBar from './child/OrderNav'
    export default {
        name: "ConfirmOrder",
        components:{
            navBar
        }
    }
</script>

<style scoped>

</style>