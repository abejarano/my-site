<template>
  <div class="home">
    <Presentation/>
    <br /><br />
    <AboutMe/>
  </div>
</template>

<script>
import Presentation from '@/components/Home/Presentation.vue';
import AboutMe from '@/components/Home/AboutMe.vue';

export default {
  name: 'Home',
  components: {
    Presentation,
    AboutMe,
  },
};
</script>
