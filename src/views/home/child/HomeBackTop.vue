<template>
    <div class="back">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "HomeBackTop"
    }
</script>

<style scoped>
.back{
    position: fixed;
    z-index: 99999;
    bottom: 55px;
    right: 8px;
}
    .back img{
        width: 48px;
        height: 48px;
        opacity: .7;
    }
</style>