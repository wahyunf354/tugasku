function cookiesHandler() {
    function setCookies(tokenCredentials) {
        Cookies.set('credentials', tokenCredentials);
    }

    function getCookies() {
        return Cookies.get('credentials');
    }

    function deleteCookies() {
        Cookies.remove('credentials');
    }

    return {setCookies, getCookies, deleteCookies};
}

export default cookiesHandler;