<template>
  <footer>
    <div class="footer__content">
      <a target="_blank" href="https://instagram.com/akbar.ppt">Request Universitas</a>
      <a target="_blank" href="#">Github</a>
      <a target="_blank" href="https://worthtocode.wordpress.com/2020/11/10/tugasku/">Download Aplikasi</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 10%;
}

.footer__content {
  margin: auto;
  height: 100%;
  display: flex;
  max-width: 600px;
}

.footer__content a {
  color: black;
  margin: auto;
  font-size: 1rem;
  text-decoration: none;
}

.footer__content a:hover {
  border-bottom: 1px solid black;
}

@media screen and (max-width: 600px) {
  .footer__content {
    display: block;
    text-align: center;
  }

  .footer__content a {
    width: 100%;
    display: block;
    padding: 20px 0;
  }

  .footer__content a:hover {
    border: none;
  }
}
</style>