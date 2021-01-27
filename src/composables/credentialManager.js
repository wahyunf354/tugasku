export async function getCredentials() {
    return await navigator.credentials.get({
        password: true,
        mediation: "required"
    });
}

export async function createCredentials(loginInfo) {
    const credentials = new PasswordCredential({
        id: loginInfo.username,
        name: loginInfo.url,
        password: loginInfo.password,
    });
    await navigator.credentials.store(credentials);
    return credentials;
}