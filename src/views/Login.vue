<template>
  <div class="base-layout">
    <Navbar/>
    <div class="content">
      <form @submit.prevent="submitHandler">
        <h2>Login dengan akun<br>e-learning mu</h2>

        <div class="form__container">
          <label>Universitas
            <select v-model="endpoint" required>
              <option disabled value="">Pilih Universitas</option>
              <option v-for="elearning in elearningList.data"
                      :key="elearning.link"
                      :value="elearning.link">
                {{ elearning.universitas }}
              </option>
            </select>
          </label>
        </div>

        <div class="form__container">
          <label>Username
            <input v-model="username" type="text" placeholder="Username" required/>
          </label>
        </div>

        <div class="form__container">
          <label>Password
            <input v-model="password" type="password" placeholder="*******" required/>
          </label>
        </div>

        <button>Login</button>
      </form>
    </div>
    <Footer/>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import loginHandler from "@/composables/loginHandler";
import elearningHandler from "@/composables/elearningHandler";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar, Footer},
  setup() {
    const {hasLoginCredentials} = loginHandler();
    const {getElearning, elearningList} = elearningHandler();
    const {isLoading, error, logUserIn} = loginHandler();

    const username = ref('');
    const password = ref('');
    const endpoint = ref('');

    onMounted(async () => {
      await hasLoginCredentials();
      await getElearning();
    });

    async function submitHandler() {
      const loginInfo = {
        username: username.value,
        password: password.value,
        url: endpoint.value
      };
      await logUserIn(loginInfo);
    }

    return {
      elearningList, username, password, endpoint,
      isLoading, error, submitHandler
    }
  }
}
</script>

<style scoped>
.base-layout {
  height: 100vh;
  display: flex;
  margin: auto;
  flex-direction: column;
}

.content {
  height: 100%;
  margin: auto;
  display: flex;
}

form {
  margin: auto;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
}

form h2 {
  width: 100%;
  color: #333333;
  margin-bottom: 35px;
  line-height: 1.3;
}

.form__container {
  width: 100%;
  margin: 14px 0;
  position: relative;
}

label {
  font-size: 17px;
  color: #999999;
  padding-bottom: 10px;
}

input, select, button {
  width: 100%;
  border: none;
  outline: none;
  font-size: 17px;
  margin-top: 5px;
  padding: 10px 0;
  background: transparent;
  border-bottom: 2px solid #dbdbdb;
}

input:focus, select:focus {
  border-bottom: 2px solid black;
}

select {
  cursor: pointer;
}

button {
  color: white;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  background: black;
  padding: 15px 0;
  border-radius: 30px;
}

button:hover {
  background: #dbdbdb;
  color: black;
}

@media screen and (max-width: 600px) {
  form {
    max-width: 100%;
    padding: 30px;
  }

  form h2 {
    font-size: 1rem;
  }
}
</style>