<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans');

#app {
  font-family: "Josefin Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
}

.base-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
}
</style>
