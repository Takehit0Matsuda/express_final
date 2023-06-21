<template>
  <nav id="nav">
    <p class="nav-links">Take Book Review</p>
    <ul class="nav-links">
      <li>
        <router-link to="/" class="links">Home</router-link>
      </li>
      <li v-if="!$store.getters.loggedIn">
        <router-link to="about" class="links">About</router-link>
      </li>
      <li v-if="$store.getters.loggedIn">
        <router-link to="reviews" class="links">Review List</router-link>
      </li>
      <li v-if="!$store.getters.loggedIn">
        <router-link to="signup" class="links">Sign Up</router-link>
      </li>
      <li v-if="!$store.getters.loggedIn">
        <router-link to="login" class="links">Login</router-link>
      </li>
      <li v-if="$store.getters.loggedIn">
        <a @click="logout()" class="links">Logout</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid gray;
  z-index: 1;
}
#nav ul {
  list-style-type: none;
}
</style>
