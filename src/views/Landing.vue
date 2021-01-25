<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar__title">
        <h1>Tugasku</h1>
      </div>
    </div>
    <div class="body">
      <div class="body__wrapper">
        <div class="body__wrapper__content">
          <h2>Aplikasi ini membantu mencari<br>tugas akun e-learning anda</h2>
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
    <div class="footer">
      <div class="footer__content">
        <router-link to="/">Github</router-link>
        <router-link to="/">Donasi</router-link>
        <router-link to="/">Request Universitas</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar, .footer {
  width: 100%;
  height: 180px;
  padding: 20px 0;
  text-align: center;
}

.navbar__title {
  margin: auto;
  padding: 20px;
}

.navbar__title h1 {
  margin: auto;
  font-size: 3rem;
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
  text-align: left;
  padding-right: 5%;
}

.body__wrapper__content {
  max-width: 400px;
  margin: 0 0 0 auto;
}

.body__wrapper__content h2 {
  line-height: 1.3;
}

.body__wrapper__content p {
  font-size: 20px;
  margin: 30px 0;
}

.body__wrapper__content button {
  width: 200px;
  border: none;
  font-size: 17px;
  color: white;
  cursor: pointer;
  padding: 20px;
  font-weight: bold;
  background: black;
  border-radius: 30px;
}

.body__wrapper button:hover {
  background: #dbdbdb;
  color: black;
}

.body__hero img {
  width: 80%;
}

.footer {
  width: 100%;
  height: 180px;
  padding: 20px 0;
  text-align: center;
}

.footer__content {
  margin: auto;
  padding: 20px;
  text-align: center;
}

.footer__content a {
  color: black;
  font-size: 1.2rem;
  margin: 0 20px;
  text-decoration: none;
}

.footer__content a:hover {
  border-bottom: 1px solid black;
}

@media screen and (max-width: 900px) {
  .body__wrapper {
    padding: 50px;
    max-width: 100%;
  }

  .body__hero {
  }
}
</style>