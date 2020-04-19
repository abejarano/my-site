<template>
  <v-content>
  <div class="home">
    <Presentation/>
    <br /><br /><br />
    <AboutMe/>
  </div>
  </v-content>
</template>

<script>
import Presentation from '@/components/Home/Presentation.vue';
import AboutMe from '@/components/Home/AboutMe';
export default {
  name: 'Home',
  components: {
    Presentation,
    AboutMe,
  },
};
</script>
