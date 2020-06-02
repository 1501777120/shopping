<template>
  <div id="app">

    <router-view/>
    <tabbar-main></tabbar-main>
  </div>
</template>
<script>
  import TabbarMain from 'components/tabbar/TabbarMain';
  export  default {
      data(){
          return{

          }
      },
      components:{
          TabbarMain,
      }
  }
</script>
<style>
@import "assets/css/base.css";
</style>
