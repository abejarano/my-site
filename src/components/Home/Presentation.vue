<template>
    <section>        
        <div id="container-image">
            <b-row class="p-0">
                <b-col sm = "0" lg = "4"></b-col>
                <b-col sm="12" lg = "8" class="p-0">
                    <img :src="require('../../assets/Grupo1-min.png')"  contain width="100%" />
                </b-col>
            </b-row>
        </div>
        <div id="presentation" class="mt-5">
            <b-container>
                <b-row class="pt-lg-5">
                    <b-col lg="5" sm="12">
                        <div class = "icon-decorator">
                            <img :src="require('../../assets/Group169.png')"  contain height="74%" />
                        </div>
                        <h1 class="ralewaybold fontbluedark mb-0">{{ $t('home.presentation.message1') }}</h1>
                        <h1 class="nexalight fontblue mt-0 mb-0">{{ $t('home.presentation.message2') }}</h1>
                        <h1 class="ralewaybold fontbluedark mt-0">{{ $t('home.presentation.message3') }}</h1>
                        <p class="mt-4">
                            {{ $t('home.presentation.message4') }}
                        </p>                        
                        <b-button variant="primary" class="mt-3" round>{{ $t('home.presentation.button') }}</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </section>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Presentation',
    data: () => ({}),

  });
</script>

<style lang="scss">
    #container-image {
        position: absolute; top: -20px; z-index: 1; width: 100%
    }
    #presentation {
        z-index: 4;
        position: relative;
    }
    .icon-decorator {
        width: 40px;
        height: 80px;
        position: absolute;
        top: -1px;
        left: -28px;
    }
</style>