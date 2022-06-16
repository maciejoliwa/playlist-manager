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
      <router-view style="padding: 15px"/>
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
  background: linear-gradient(to bottom right, #151515, #3a3838);
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
  margin-bottom: 12px;
  font-family: sans-serif;
  font-size: 2rem;
}

a {
  text-decoration: none;
  color: lightblue;
}

.navigation {
  /*box-shadow: 5px 0 10px 5px rgba(0, 0, 0, 0.37);*/
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.navigation__link {
  background-color: #303030;
  margin-top: 5px;
  padding: 10px 5px;
  transition: background-color .1s;
  display: grid;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  grid-template-columns: 1fr 1fr;
}

.navigation__link div {
  text-transform: uppercase;
}

.navigation__link:hover {
  background-color: #558aa9;
}

@media only screen and (max-width: 400px) {
  .wrapper {
    grid-template-columns: 30% 1fr;
  }
}

@media only screen and (max-width: 600px) {
  .wrapper {
    grid-template-columns: 20% 1fr;
  }
}

</style>
