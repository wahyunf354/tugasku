<template>
  <header class="navbar">
    <h1>Tugasku</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: #444444 dashed 1px;
}

header h1 {
  color: #444444;
  font-size: 2rem;
}

nav a {
  color: #bbb;
  margin-left: 20px;
  text-decoration: none;
}

nav a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>