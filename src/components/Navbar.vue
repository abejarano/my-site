<template>
    <div id="header">
        <v-container class="pa-0">
            <v-row>
                <v-col cols="3" class=" pa-0">
                    <v-img :src="require('../assets/logo2.png')"  contain height="60" />
                </v-col>
                <v-spacer />

                <v-row no-gutters class="justify-end align-content-center">
                    <v-btn v-for="link in links" :key="link" text rounded class="my-2 ma-2">
                        <router-link :to=link.url>{{link.title}}</router-link>
                    </v-btn>
                    <!--<v-btn text rounded class="my-2">
                        <v-icon>fab fa-facebook</v-icon>
                    </v-btn>
                    <v-btn text rounded class="my-2">
                        <v-icon>fab fa-instagram</v-icon>
                    </v-btn>
                    <v-btn text rounded class="my-2">
                        <v-icon>fab fa-linkedin</v-icon>
                    </v-btn>-->
                </v-row>
            </v-row>

        </v-container>
    </div>

</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Navbar',

    data: () => ({
      links: [
        {url: "/", title:'Home'},
        {url: "/about", title:'Experiência'},
        {url: "/about", title:'CV'},
        {url: "/about", title:'Contato'},
      ],
    }),
  })
</script>
<style lang="scss">
    #header {
        background: rgb(255, 255, 255, 0.4);
        z-index: 9;
    }
    button {
        background: rgb(99, 180, 205, 0.4) !important;
    }
    a {
        text-decoration: none;
    }
    .v-btn__content > a {
        color:#131416 !important;
        font-size: 10pt;
        font-family: "ralewaybold";
    }
</style>
