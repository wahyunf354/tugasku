<template>
  <div class="base-layout">
        <Button title="Log out" @on-click="logUserOut" />
        <div class="space"></div>
        <div class="space"></div>
        <Navbar/>
        <div class="layout">
          <div v-if="isNotEmptyAssignment" class="body__content">
              <Assignment v-for="assignment in assignmentList" :key="assignment.id" :assignment="assignment"/>
          </div>
          <div v-else class="body__content body--center">
            <div class="space"></div>
            <p>Tidak ada tugas</p>
          </div>
          <div class="illustration">
            <img src="../assets/pixeltrue-sleeping.svg" alt="">
          </div>
        </div>
       <Footer/>
  </div>
</template>

<script>
// component Vue
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Assignment from "@/components/Assignment";
import Button from "@/components/Button";

import apiHandler from "@/composables/apiHandler";

import {useRouter} from "vue-router";
import {getCookies, deleteCookies} from "@/composables/cookiesHandler";

export default {
  components: {Footer, Navbar, Assignment, Button},
  data(){
    return {
      isNotEmptyAssignment: false,
      // assignmentList: [
      //   {
      //     course: { fullname: "asdfsd" },
      //     name: "BLALAL",
      //     timestart: 234135,
      //     url: "asd.com"
      //   }
      // ]
    }
  },
  setup() {
    const router = useRouter();
    const {getAssignment, assignmentList, isLoading, error} = apiHandler();
    const cookies = JSON.parse(getCookies());
    console.log(cookies);

    function logUserOut() {
      deleteCookies()
      router.go(0);
    }


    if (assignmentList.length > 0) {
      this.isNotEmptyAssignment = true
    }

    return {assignmentList, logUserOut}
  },
}
</script>

<style scoped>
.base-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: flex;
  min-height: 80vh;
}

.body__content {
  flex: 1;
}

.body--center {
  text-align: center;
}

.illustration {
  flex: 1;
}

.illustration img {
  width: 100%;
}

.space {
  height: 10px
}

@media screen and (max-width: 600px) {

  .illustration {
    max-width: 0;
    display: none;
  }
}
</style>