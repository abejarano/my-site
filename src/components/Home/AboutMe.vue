<template>
    <v-container>
        <v-row>
            <v-col class="col-sm-12 col-lg-6" style="position: relative">
                <img :src="require('../../assets/Group265.png')"  contain height="74%" />
                <div class="video">
                    <video height="200" width="300" class="video" ref="video" controls>
                        <source src="" type="video/mp4">
                    </video>
                </div>

            </v-col>
            <v-col class="col-sm-12 col-lg-6 mt-lg-12 pt-lg-12" style="position: relative">
                <h1>{{ $t('home.aboutme.title_part1') }} <span>{{ $t('home.aboutme.title_part2') }}</span></h1>
                <div class = "icon-decorator" style="left: 190px; top: 43px;">
                    <img :src="require('../../assets/Group169.png')"  contain height="74%" />
                </div>
                <p class="mt-8">{{ $t('home.aboutme.message') }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
      name: 'AboutMe',
      computed: {
        videoElement () {
          return this.$refs.video;
        },
      },
      components: {

      },
      data: () => ({}),
    });
</script>
<style>
    .video {
        position: absolute;
        top: 60px;
        left: 70px;
    }
</style>
