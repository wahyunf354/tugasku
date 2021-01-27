import {useRouter} from 'vue-router';
import tokenHandler from "@/composables/tokenHandler";
import {setCookies} from "@/composables/cookiesHandler";
import {getCredentials, createCredentials} from "@/composables/credentialManager";

function loginHandler() {
    const router = useRouter();
    const {getToken, token, isLoading, error} = tokenHandler();

    async function hasLoginCredentials() {
        const loginCred = await getCredentials();
        if (loginCred) {
            await getToken(loginCred);
            storeTokenCred(loginCred);
        }
    }

    async function logUserIn(loginInfo) {
        const loginCred = await createCredentials(loginInfo);
        await getToken(loginCred);
        storeTokenCred(loginCred);
    }

    function storeTokenCred(loginCred) {
        if (token.value) {
            const tokenCred = {
                token: token.value,
                username: loginCred.id,
                endpoint: loginCred.name,
            }
            setCookies(tokenCred);
            router.push('/');
        }
    }

    return {token, isLoading, error, hasLoginCredentials, logUserIn};
}

export default loginHandler;