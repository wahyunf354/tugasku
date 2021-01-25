function credentialManager() {
    async function getCredentials() {
        return await navigator.credentials.get({
            password: true,
            mediation: "required"
        });
    }

    async function createCredentials(loginInfo) {
        const credentials = new PasswordCredential({
            id: loginInfo.username,
            password: loginInfo.password,
            iconURL: loginInfo.url
        });
        await navigator.credentials.store(credentials);
        return credentials;
    }

    return {getCredentials, createCredentials}
}

export default credentialManager;