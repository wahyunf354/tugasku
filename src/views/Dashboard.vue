<template>
  <div class="base-layout">
    <button @click="logUserOut">Log out</button>
    <!--    <Navbar/>-->
    <!--    <div class="layout">-->
    <!--      <div class="body__content">-->
    <!--        <Assignment v-for="assignment in assignmentList" :key="assignment.id" :assignment="assignment"/>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <Footer/>-->
  </div>
</template>

<script>
import {useRouter} from "vue-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Assignment from "@/components/Assignment";
import apiHandler from "@/composables/apiHandler";
import {getCookies, deleteCookies} from "@/composables/cookiesHandler";

export default {
  components: {Footer, Navbar, Assignment},
  setup() {
    const router = useRouter();
    const {getAssignment, assignmentList, isLoading, error} = apiHandler();
    const cookies = JSON.parse(getCookies());
    console.log(cookies);

    function logUserOut() {
      deleteCookies()
      router.go(0);
    }

    return {assignmentList, logUserOut}
  }
}
</script>

<style scoped>
.base-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  height: 80%;
}
</style>