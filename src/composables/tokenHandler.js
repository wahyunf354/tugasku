import {ref} from 'vue';

function tokenHandler() {
    const token = ref(null);
    const isLoading = ref(false);
    const error = ref(null);

    function createTokenUrl(loginCred) {
        const params = {
            username: loginCred.id,
            password: loginCred.password,
            service: 'moodle_mobile_app'
        }
        const url = new URL("/login/token.php", loginCred.name);
        url.search = new URLSearchParams(params).toString();
        return url;
    }

    async function getToken(loginCred) {
        const url = createTokenUrl(loginCred);
        isLoading.value = true;

        try {
            const res = await fetch(url, {method: "POST"});
            const data = await res.json();
            if (data.error) {
                throw Error("Username atau password yang anda masukkan salah");
            }
            token.value = data.token;
        } catch (err) {
            isLoading.value = false;
            error.value = err.message;
        }
    }

    return {getToken, token, isLoading, error}
}

export default tokenHandler;