<template>
  <nav id="nav">
    <p class="nav-links">AAAAAAA</p>
    <ul class="nav-links">
      <li>
        <router-link to="/" class="links">Home</router-link>
      </li>
      <li>
        <router-link to="about" class="links">About</router-link>
      </li>
      <li>
        <router-link to="signup" class="links">Sign Up</router-link>
      </li>
      <li>
        <router-link to="login" class="links">Login</router-link>
      </li>
    </ul>
  </nav>
</template>
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
