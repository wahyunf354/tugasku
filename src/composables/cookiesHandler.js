import Cookies from 'js-cookie';

export function setCookies(tokenCredentials) {
    Cookies.set('credentials', tokenCredentials);
}

export function getCookies() {
    return Cookies.get('credentials');
}

export function deleteCookies() {
    Cookies.remove('credentials');
}