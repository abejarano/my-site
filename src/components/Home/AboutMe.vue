<template>
    <b-container>
        <b-row class="mt-lg-5 pt-lg-5"> 
            <b-col sm="12" lg="6" style="position: relative">
                <img :src="require('../../assets/Group265.png')"  contain width="100%" />
                <div class="video">
                    <video height="200" width="300" class="video" ref="video" controls>
                        <source src="" type="video/mp4">
                    </video>
                </div>

            </b-col>
            <b-col sm="12" lg="6" class="mt-5 pt-5" style="position: relative">
                <h1>{{ $t('home.aboutme.title_part1') }} <span>{{ $t('home.aboutme.title_part2') }}</span></h1>
                <div class = "icon-decorator" style="left: 210px; top: 36px;">
                    <img :src="require('../../assets/Group169.png')"  contain height="74%" />
                </div>
                <p class="mt-8">{{ $t('home.aboutme.message') }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
      name: 'AboutMe',
      computed: {
        videoElement() {
          return this.$refs.video;
        },
      },
      components: {

      },
      data: () => ({ }),
    });
</script>
<style>
    .video {
        position: absolute;
        top: 60px;
        left: 70px;
    }
    .icon-decorator {
        width: 40px;
        height: 80px;
        position: absolute;
        top: 10px;
        left: -28px;
    }
</style>
