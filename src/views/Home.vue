<template>
  <v-content>
  <div class="home">
    <Presentation/>
  </div>
  </v-content>
</template>

<script>
import Presentation from '@/components/Home/Presentation.vue';

export default {
  name: 'Home',
  components: {
    Presentation,
  },
};
</script>
