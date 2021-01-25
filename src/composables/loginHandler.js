function loginHandler() {
    async function showLoginCredentials() {
        return await navigator.credentials.get({password: true});
    }

    async function createLoginCredentials(loginInfo) {
        const credentials = new PasswordCredential({
            id: loginInfo.username,
            password: loginInfo.password,
            iconURL: loginInfo.url
        });
        await navigator.credentials.store(credentials);
        return credentials;
    }

    return {showLoginCredentials, createLoginCredentials}
}

export default loginHandler;