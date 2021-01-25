<template>
  <Dashboard v-if="hasTokenCred"/>
  <Landing v-else/>
</template>

<script>
import {ref} from 'vue';
import Login from "@/views/Login";
import cookiesHandler from "@/composables/cookiesHandler";
import Landing from "@/views/Landing";
import Dashboard from "@/views/Dashboard";

export default {
  components: {Dashboard, Landing, Login},
  setup() {
    const {getCookies} = cookiesHandler();
    const hasTokenCred = ref(getCookies());

    return {hasTokenCred};
  }
}
</script>

<style scoped>
</style>