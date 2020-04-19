<template>
    <v-toolbar flat class="header_transparent">
        <v-toolbar-title class="headline text-uppercase">
            <router-link to="/">
                <v-img :src="require('../assets/logo2.png')"  contain height="60" />
            </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-row no-gutters class="justify-end align-content-center">
            <v-btn v-for="link in links" :key="link.title" text rounded class="my-3 ma-3">
                <router-link :to=link.url>{{$t(link.title)}}</router-link>
            </v-btn>
            <v-col cols="2">
                <v-combobox class="pt-3 ml-2" chips small-chips persistent-hint
                            v-model="lang" :items="languages" label
                            @change="changeLocale(lang)"
                />
            </v-col>
        </v-row>
    </v-toolbar>

</template>

<script lang="ts">
  import Vue from 'vue';
  import i18n from '@/i18n';

  export default Vue.extend({
    name: 'Header',
    created(): void {
      this.changeLocale(this.lang);
    },
    data: () => ({
      lang: 'Português',
      links: [
        {url: '/', title: 'menu.home'},
        {url: '/about', title: 'menu.projects'},
        {url: '/about', title: 'menu.cv'},
        {url: '/about', title: 'menu.contact'},
      ],
      languages: ['English', 'Português'],
    }),
    methods: {

      changeLocale(locale: any) {
        if (locale === 'Português') {
          i18n.locale = 'pt';
        } else {
          i18n.locale = 'en';
        }
      },
    },
  });
</script>
<style lang="scss">
    .full-width {
        width: 100%;
    }
    .header_transparent {
        background-color: transparent !important;
        z-index: 9;
    }
    button {
        background: rgb(234, 150, 36, 0.6) !important;
    }
    a {
        text-decoration: none;
    }
    .v-btn__content > a {
        color: white !important;
        font-size: 9pt;
        font-family: "ralewaybold";
    }
</style>
