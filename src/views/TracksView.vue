<template>
  <div class="container">

    <div class="input-wrapper">
        <input type="search" name="track-name" class="input" placeholder="Track's name" id="">
        <button class="search">Search</button>
    </div>

    <div class="tracks">
      <Track name="Demons" artist="Imagine Dragons" :id="5" />
      <Track name="We Are" artist="Hiroshi Katakani" :id="56"/>
      <Track name="Paint" artist="I Hate Mondays" :id="26"/>
      <Track name="Believer" artist="Imagine Dragons" :id="16"/>
      <Track name="Warriors" artist="Imagine Dragons" :id="2"/>
      <Track name="Hope" artist="Nami Amuro" :id="66"/>
      <Track name="Caramelldansen" artist="Caramella Girls" :id="4"/>
      <Track name="Smell Of The Game" artist="Guilty Gear Strive" :id="1"/>
      <Track name="The Last Goodbye" artist="The Gregory Brothers & Markiplier" :id="0"/>
      <Track name="Heartbreaks" artist="Josh A" :id="57"/>
      <Track name="Prayer X" artist="King Gnu" :id="58"/>
      <Track name="2 Phut Hon" artist="Phao" :id="56"/>
      <Track name="Mr. Doctor Man" artist="PALAYE ROYALE" :id="56"/>
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

.input, .search {
  padding: 10px;
}

.search {
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    background-color: #345f79;
    border: none;
    color: white;
}

.search:hover {
    background-color: #558aa9;
}

.input-wrapper {
    display: grid;
    grid-template-columns: 80% 1fr;
    grid-gap: 5px;
}

.container {
  padding: 10px;
}

.tracks {
    margin-top: 5px;
    overflow-y: auto;
    height: 90vh;
    border-bottom: 2px solid black;
}

</style>