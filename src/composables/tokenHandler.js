import {ref} from 'vue';

function tokenHandler() {
    const token = ref(null);
    const isLoading = ref(true);
    const error = ref(null);

    function createTokenUrl(loginCred) {
        const params = {
            username: loginCred.id,
            password: loginCred.password,
            service: 'moodle_mobile_app'
        }
        const url = new URL("/login/token.php", loginCred.iconURL);
        url.search = new URLSearchParams(params).toString();
        return url;
    }

    async function getToken(loginCred) {
        const url = createTokenUrl(loginCred)

        try {
            const res = await fetch(url, {method: "POST"});
            const data = await res.json();
            if (data.error) {
                throw Error("Username atau password yang anda masukkan salah");
            }
            token.value = data.token
        } catch (err) {
            error.value = err.message
            isLoading.value = false;
        }
    }

    return {getToken, token, isLoading, error}
}

export default tokenHandler;