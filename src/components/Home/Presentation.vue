<template>
    <v-container class="container--fluid pl-0 pr-0 pt-0" style="position: absolute; top: 0; z-index: 1">
        <v-row>
            <v-col cols = "4"></v-col>
            <v-col cols = "8" class="pt-0">
                <img :src="require('../../assets/Grupo1-min.png')"  contain height="74%" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'Presentation',
  })
  export default class Presentation extends Vue {

  }
</script>
