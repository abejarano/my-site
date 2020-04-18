<template>
  <v-app>
    <v-container class="align-content-center pt-0" style="z-index: 9">
      <v-row>
        <v-col cols="4" class="pt-0">
          <v-img :src="require('./assets/logo2.png')"  contain height="80" />
        </v-col>
        <v-spacer></v-spacer>

        <v-row ustify="center" no-gutters>
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
