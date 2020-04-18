<template>
  <v-app>
    <v-container class="pt-0" style="z-index: 9">
      <v-row>
        <v-col cols="3" class=" pt-0">
          <v-img :src="require('./assets/logo2.png')"  contain height="80" />
        </v-col>
        <v-spacer></v-spacer>

        <v-row no-gutters>
          <v-btn v-for="link in links" :key="link" text rounded class="my-2">
            <router-link :to=link.url>{{link.title}}</router-link>
          </v-btn>
        </v-row>

      </v-row>

    </v-container>
        <router-view></router-view>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloWorld from './components/HelloWorld.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      HelloWorld,
    },

    data: () => ({
      links: [
        {url: "/", title:'Home'},
        {url: "/about", title:'Experiência'},
      ],
    }),
  });
</script>
<style lang="scss">
  @font-face {font-family: nexalight; src: url(./assets/fonts/Nexa-Light.otf);}
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
  </style>
