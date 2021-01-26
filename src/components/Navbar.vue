<template>
  <nav>
    <div class="nav__content">
      <router-link to="/"><h1>Tugasku</h1></router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 10%;
}

.nav__content {
  margin: auto;
  height: 100%;
  display: flex;
  max-width: 600px;
}

.nav__content a {
  color: black;
  margin: auto;
  text-decoration: none;
}

.nav__content h1 {
  font-size: 2rem;
}
</style>