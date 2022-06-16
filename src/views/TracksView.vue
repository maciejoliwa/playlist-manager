<template>
  <div class="container">

    <input type="search" name="track-name" class="input" placeholder="Track's name" id="">

    <div class="tracks">
      <Track name="Demons" artist="Imagine Dragons" :id="5" />
      <Track name="We Are" artist="Hiroshi Katakani" :id="56"/>

    </div>
  </div>
</template>

<script>
import Track from '../components/Track/Track.vue';

export default {

  components: {
    Track
  }

}
</script>

<style scoped>

.input {
  width: 100%;
  padding: 10px;
}

.container {
  padding: 10px;
}

</style>