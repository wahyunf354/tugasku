<template>
  <div class="base-layout">
    <Navbar/>
    <div class="body">
      <div class="body__wrapper">
        <div class="body__wrapper__content">
          <h3>Aplikasi yang mempermudah mencari tugas e-learning</h3>
          <p>Hanya dengan login semua beres</p>
          <router-link to="/login">
            <button>Login</button>
          </router-link>
        </div>
      </div>
      <div class="body__hero">
        <img src="../assets/pixeltrue-sleeping.svg" alt="">
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Navbar, Button}
}
</script>

<style scoped>
.base-layout {
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.body {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 50px;
}

.body__wrapper, .body__hero {
  width: 50%;
  margin: auto;
}

.body__wrapper {
  display: flex;
  text-align: right;
  padding-right: 10%;
}

.body__wrapper__content {
  line-height: 1.3;
  text-align: right;
  max-width: 300px;
  margin: 0 0 0 auto;
}

.body__wrapper__content p {
  margin: 30px 0;
}

.body__wrapper__content button {
  border: none;
  font-size: 17px;
  color: white;
  cursor: pointer;
  margin: 0 auto;
  padding: 14px 30px;
  text-align: center;
  font-weight: bold;
  background: black;
  border-radius: 30px;
}

.body__wrapper button:hover {
  background: #dbdbdb;
  color: black;
}

.body__hero img {
  width: 70%;
}

@media screen and (max-width: 800px) {
  .body__wrapper {
    padding: 0;
    max-width: 100%;
  }

  .body__wrapper__content {
    max-width: 400px;
    text-align: center;
  }

  .body__hero img {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .body {
    padding: 0;
  }

  .body__hero {
    max-width: 0;
    display: none;
  }
}
</style>