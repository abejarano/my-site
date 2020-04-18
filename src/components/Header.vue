<template>
    <div id="header">
        <v-container class="pa-0">
            <v-row>
                <v-col cols="3" class="pa-0">
                    <v-img :src="require('../assets/logo2.png')"  contain height="60" />
                </v-col>
                <v-spacer />

                <v-row no-gutters class="justify-end align-content-center">
                    <v-btn v-for="link in links" :key="link.title" text rounded class="my-2 ma-2">
                        <router-link :to=link.url>{{link.title}}</router-link>
                    </v-btn>
                    <v-col cols="2">
                        <v-combobox class="pt-1" chips small-chips persistent-hint
                                v-model="lang" :items="languages" label
                                @change="changeLocale(lang)"
                        />
                    </v-col>
                </v-row>
            </v-row>

        </v-container>
    </div>

</template>

<script lang="ts">
  import Vue from 'vue'
  import i18n from '@/i18n';

  export default Vue.extend({
    name: 'Header',
    created: function () {
      this.changeLocale(this.lang);

    },
    methods: {
      changeLocale(locale: any) {
        if (locale === "Portuguese") {
          console.log(locale);
          i18n.locale = "pt";
        } else {
          i18n.locale = "en";
        }
      }
    },
    data: () => ({
      lang: 'Portuguese',
      links: [
        {url: "/", title:'Home'},
        {url: "/about", title:'Experiência'},
        {url: "/about", title:'CV'},
        {url: "/about", title:'Contato'},
      ],
      languages: ['English','Portuguese'],
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
        //color:#131416 !important;
        color: #2b2b2b !important;
        font-size: 10pt;
        font-family: "ralewaybold";
    }
</style>
