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
        <v-container id="presentation">
            <v-row class="pa-8">
                <v-col cols="5" class="mt-12" style="position: relative">
                    <div class = "icon-decorator">
                        <img :src="require('../../assets/Group169.png')"  contain height="74%" />
                    </div>
                    <h1 class="ralewaybold fontbluedark">{{ $t('presentation.message1') }}</h1>
                    <h1 class="nexalight fontblue">{{ $t('presentation.message2') }}</h1>
                    <h1 class="ralewaybold fontbluedark">{{ $t('presentation.message3') }}</h1>
                    <p class="mt-4">
                        {{ $t('presentation.message4') }}
                    </p>
                    <v-btn rounded color="primary">Saiba mais sobre mim</v-btn>
                </v-col>
            </v-row>

        </v-container>
    </v-container>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Presentation',

    data: () => ({}),

  })
</script>

<style lang="scss">
    #presentation {
        z-index: 2;
        position: relative;
    }
</style>
