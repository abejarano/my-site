<template> 
<div>
  <b-navbar fixed id="navbar" toggleable="lg" class="p-0">
    <div class = "container">
    <b-navbar-brand>
      <router-link to="/">
        <img :src="require('../assets/logo2.png')"  contain height="60" />
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" style="z-index:10"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav right>
        <b-nav-item href="#" v-for="link in links" :key="link.title">
          <router-link :to=link.url>{{$t(link.title)}}</router-link>
        </b-nav-item>
        
      </b-navbar-nav>
        <b-nav-item-dropdown :text="lang" right>
          <b-dropdown-item v-on:click="changeLocale(item)" v-for="item in languages" :key="item">{{item}}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import i18n from '@/i18n';

  export default Vue.extend({
    name: 'Header',
    created(): void {
      this.changeLocale(this.lang);
    },
    mounted(): void {
      window.addEventListener('scroll', this.onScroll);
    },
    data: () => ({
      whiteNavbar: false,
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
        this.lang = locale;
        if (locale === 'Português') {
          i18n.locale = 'pt';
        } else {
          i18n.locale = 'en';
        }
      },
      onScroll(): void {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 60) {
          this.whiteNavbar = false;
        } else {
          this.whiteNavbar = true;
        }
      },
    },
  });
</script>

<style lang="scss" scoped>
  .navbar-brand {
    z-index: 10;
  }
  #nav-collapse {
    z-index: 10;
  }
  #navbar {
    z-index:10;
    background-color: rgb(255, 255, 255, 0.4);
  }
  .nav-item {
    border-radius: 16px;
    padding-left:10px ;
    padding-right:10px;
    
    margin-right: 6px;
  }
  .nav-item:hover {
    background-color: rgb(237, 150, 36);
  }
  .navbar-light .navbar-nav .nav-link {
    text-align: center;    
    color:white;
  
  }
  .nav-link > a, .nav-link, .dropdown-toggle {
    font-size: 10pt;
    color:white;
  }
</style>