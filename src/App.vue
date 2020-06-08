<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view/>
    </keep-alive>

    <div v-if="TabbarMainShow">
      <tabbar-main></tabbar-main>
    </div>

  </div>
</template>
<script>
  import TabbarMain from 'components/tabbar/TabbarMain';
  export  default {
      data(){
          return{
              TabbarMainShow:true,
          }
      },
      components:{
          TabbarMain,
      },
      watch: {
          $route(to, from) {
              if(this.$route.path == "/productInfo") {
                  this.TabbarMainShow = false;
              } else {
                  this.TabbarMainShow = true;
              }
          }
      }

  }
</script>
<style>
@import "assets/css/base.css";
</style>
