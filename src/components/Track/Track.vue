<template>
  <div class="track">
    <div class="track__artist">
        {{ artistName }}
    </div>
    <div class="track__name">
        {{ trackName }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'TrackComponent',
    props: ["artist", "name", "id"],

    data() {
        return {
            artistName: this.artist,
            trackName: this.name,
            trackId: this.id
        }
    }
}
</script>

<style scoped>

.track {
    font-family: 'Roboto', sans-serif;
    padding: 10px;
    color: #f0f0f0;
    background-color: #404040;
    margin-top: 10px;
}

.track__artist {
    font-size: .9rem;
}

.track__name {
    font-size: 1.2rem;
    font-weight: 500;
}

</style>