<template>
    <v-toolbar flat >

        <v-toolbar-title class="headline text-uppercase">
            <router-link to="/">
                <v-img :src="require('../assets/logo2.png')"  contain height="60" />
            </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-row no-gutters class="justify-end align-content-center">
            <v-btn v-for="link in links" :key="link.title" text rounded class="my-2 ma-2">
                <router-link :to=link.url>{{$t(link.title)}}</router-link>
            </v-btn>
            <v-col cols="2">
                <v-combobox class="pt-1" chips small-chips persistent-hint
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
    $white-transparent: rgb(255, 255, 255, 0.4) !important;
    .header_transparent {
        background: $white-transparent !important;
        z-index: 9;
    }
    button {
        background: rgb(99, 180, 205, 0.4) !important;
    }
    a {
        text-decoration: none;
    }
    .v-btn__content > a {
        color: #2b2b2b !important;
        font-size: 9pt;
        font-family: "ralewaybold";
    }
</style>
