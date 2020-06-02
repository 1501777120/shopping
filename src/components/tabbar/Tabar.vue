<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabar"
    }
</script>

<style scoped>
    .tab-bar{
        width: 100vw;
        height: 49px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 -2px 2px rgba(100,100,100,.2);
        background-color:#f2f2f2;
        display: flex;
    }

</style>