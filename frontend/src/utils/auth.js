// Decode token
import {jwtDecode} from 'jwt-decode'

class AuthService {

    //If logged in, grab user's profile
    getProfile () {
        return jwtDecode(this.getToken());
    }

    //Checks to see if user is logged in and if there's a valid saved token
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    //Checks to see if token is expired
    isTokenExpired(token) {
        try {
            const decoded = jwtDecode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    //Takes user token from local storage
    getToken() {
        return localStorage.getItem("id_token");
    }

    //Token is saved to local storage
    login(idToken) {
        localStorage.setItem("id_token, idToken");
        window.location.assign("/");
    }

    //Removes user token when logged out
    logout() {
        localStorage.removeItem("id_token");
        window.location.assign("/");
    }
}

export default new AuthService();