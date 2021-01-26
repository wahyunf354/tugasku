<template>
  <Dashboard v-if="hasTokenCred"/>
  <Landing v-else/>
</template>

<script>
import {ref} from 'vue';
import Landing from "@/views/Landing";
import Dashboard from "@/views/Dashboard";
import cookiesHandler from "@/composables/cookiesHandler";

export default {
  components: {Landing, Dashboard},
  setup() {
    const {getCookies} = cookiesHandler();
    const hasTokenCred = ref(getCookies());
    return {hasTokenCred};
  }
}
</script>