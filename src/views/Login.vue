<template>
  <div class="base-layout">
    <form @submit.prevent="submitHandler">
      <h1>Tugasku</h1>
      <h2>Login dengan akun<br>e-learning mu</h2>

      <div class="container">
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

      <div class="container">
        <label>Username
          <input v-model="username" type="text" placeholder="Username" required/>
        </label>
      </div>

      <div class="container">
        <label>Password
          <input v-model="password" type="password" placeholder="*******" required/>
        </label>
      </div>

      <button>Login</button>
    </form>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
import loginHandler from "@/composables/loginHandler";
import elearningHandler from "@/composables/elearningHandler";

export default {
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
  max-width: 500px;
  height: 100vh;
  display: flex;
  margin: auto;
  align-items: stretch;
  flex-wrap: wrap;
}

form {
  margin: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container {
  width: 100%;
  position: relative;
  margin: 14px 0;
}

h2 {
  width: 100%;
  color: #333333;
  padding: 35px 0;
  line-height: 1.3;
  font-weight: unset;
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
  padding: 20px 0;
  border-radius: 30px;
}

button:hover {
  background: #dbdbdb;
  color: black;
}
</style>