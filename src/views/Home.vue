<template>
  <div class="home">
    <Presentation/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Presentation from '@/components/Home/Presentation.vue';

export default {
  name: 'Home',
  components: {
    Presentation
  }
}
</script>
