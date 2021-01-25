<template>
  <h1>Dashboard</h1>
  <button @click="logUserOut">Delete cookies</button>
</template>

<script>
import cookiesHandler from "@/composables/cookiesHandler";
import {useRouter} from "vue-router";

export default {
  name: "Dashboard",
  setup() {
    const router = useRouter();
    const {getCookies, deleteCookies} = cookiesHandler();
    const cookies = JSON.parse(getCookies());
    console.log(cookies);

    function logUserOut() {
      deleteCookies();
      router.go(0);
    }

    return {logUserOut}
  }
}
</script>

<style scoped>

</style>