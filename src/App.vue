<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from '@/components/Header.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      Header,
    },
    data: () => ({}),
  });
</script>
<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  @font-face {font-family: nexalight; src: url(./assets/fonts/Nexa-Light.otf);}
  @font-face {font-family: nexabold; src: url(./assets/fonts/Nexa-Bold.otf);}
  @font-face {font-family: ralewaybold; src: url(./assets/fonts/Raleway-Bold.ttf);}
  @font-face {font-family: ralewaymedium; src: url(./assets/fonts/Raleway-Medium.ttf);}

  html, body {
    font-family: ralewaymedium;
    color: #525252;
    font-size: 11pt;
  }

  .ralewaybold {
    font-family: "ralewaybold"; line-height: 1.3;
  }
  .nexalight {
    font-weight: normal;
    font-family: "nexalight"; line-height: 1.4;
  }
  .fontblue {
    color: #0087ff;
  }
  .fontbluedark {
    color: #232a61;
  }
</style>
