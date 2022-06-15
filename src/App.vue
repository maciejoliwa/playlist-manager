<template>
  <div class="wrapper">
    <nav class="navigation">
      <div class="logo">
        LOGO
      </div>
      <router-link to="/">
        <div @click="changeHighlightedLink('Home')" class="navigation__link" :class="{ chosen: currentView == 'Home' }" >
          <img class="navigation__image" src='./assets/home.png'>
          <div>Home</div>
        </div>
      </router-link>
      <router-link to="/clients">
        <div @click="changeHighlightedLink('Clients')" class="navigation__link" :class="{ chosen: currentView == 'Clients' }" >
          <img class="navigation__image" src='./assets/user.png'>
          <div>Clients</div>
        </div>
      </router-link>
      <router-link to="/tracks">
        <div @click="changeHighlightedLink('Tracks')" class="navigation__link" :class="{ chosen: currentView == 'Tracks' }" >
          <img class="navigation__image" src='./assets/note.png'>
          <div>Tracks</div>
        </div>
      </router-link>
      
      <router-link to="/about">
        <div @click="changeHighlightedLink('About')" class="navigation__link" :class="{ chosen: currentView == 'About' }">
          <img class="navigation__image" src='./assets/about.png'>
          <div>About</div>
        </div>
      </router-link>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      currentView: "Home"
    }
  },

  methods: {
    changeHighlightedLink(link) {
      this.currentView = link;
    }
  }
}

</script>

<style>
body {
  margin: 0;
  background-color: #353535;
}

.chosen {
  background-color: #345f79 !important;
}

.wrapper {
  height: 100vh;
  grid-template-columns: 20% 80%;
  display: grid;
}

.navigation__image {
  width: 30px;
}

.logo {
  margin-top: 10px;
  color: white;
  text-align: center;
  font-family: sans-serif;
  font-size: 2rem;
}

a {
  text-decoration: none;
  color: lightblue;
}

.navigation {
  box-shadow: 5px 0 10px 5px rgba(0, 0, 0, 0.37);
  left: 0;
  top: 0;
  height: 100%;
  background-color: #202020;
  display: flex;
  flex-direction: column;
}

.navigation__link {
  background-color: #303030;
  margin-top: 5px;
  font-family: sans-serif;
  padding: 10px 5px;
  transition: background-color 0.2s;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
}

.navigation__link:hover {
  background-color: #558aa9;
}

@media only screen and (max-width: 400px) {
  .wrapper {
    grid-template-columns: 30% 1fr;
  }
}

@media only screen and (max-width: 60px) {
  .wrapper {
    grid-template-columns: 20% 1fr;
  }
}

</style>
