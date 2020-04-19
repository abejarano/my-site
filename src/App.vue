<template>
  <v-app>
    <v-app-bar app style="background-color: transparent">
      <Header />
    </v-app-bar>

    <router-view />
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
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
  @font-face {font-family: nexalight; src: url(./assets/fonts/Nexa-Light.otf);}
  @font-face {font-family: nexabold; src: url(./assets/fonts/Nexa-Bold.otf);}
  @font-face {font-family: ralewaybold; src: url(./assets/fonts/Raleway-Bold.ttf);}
  @font-face {font-family: ralewaymedium; src: url(./assets/fonts/Raleway-Medium.ttf);}

  * {
    font-family: "ralewaymedium";
    color: #525252;
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
  .icon-decorator {
    width: 40px;
    height: 80px;
    position: absolute;
    top: -1px;
    left: -28px;
  }
  </style>
