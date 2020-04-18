<template>
    <v-container class="container--fluid pl-0 pr-0 pt-0">
        <div style="position: absolute; top: 0; z-index: 1; width: 100%">
            <v-row>
                <v-col cols = "4"></v-col>
                <v-col cols = "8" class="pt-0">
                    <img :src="require('../../assets/Grupo1-min.png')"  contain height="74%" />
                </v-col>
            </v-row>
        </div>
        <v-container>
            <v-row class="pa-8">
                <v-col cols="5" class="mt-12">
                    <h1 class="ralewaybold fontbluedark">Desenvolvimento criativo</h1>
                    <h1 class="nexalight fontblue">Trabalho colaborativo</h1>
                    <h1 class="ralewaybold fontbluedark">¿Web - Mobile?</h1>
                    <p class="mt-4">
                        Nunca pare de aprender acreditando que o melhor fica na frente, independentemente dos obstáculos porque o sucesso é garantido.
                    </p>
                </v-col>
            </v-row>

        </v-container>
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
