import address from "./address";


import axios from "axios";

const getNewToken = async (refreshToken, token) => {
    try {
        const { data } = await axios.post(address + '/api/auth/refresh-session', { refreshToken: refreshToken }
        )
        const newToken = data.data["access_token"]
        const newRefreshToken = data.data["refresh_token"]
        const expiryDate = data.data['expiryDate']

        if (token && refreshToken) {
            return { newToken, newRefreshToken, expiryDate }
        }
    }
    catch (error) {
        return null
    }


}
const isTokenValid = async (token) => {
    try {
        const { data } = await axios.get(address + '/api/auth/ifValid', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return true
    }
    catch (error) {
        return false
    }

}

export default function checkUser() {
    const storage = window.localStorage;
    const token = storage.getItem("token");
    const refreshToken = storage.getItem("refreshToken")
    const expiryDate = storage.getItem("expiryDate")
    if (token) {
        if (Date.now() < expiryDate) {
            return true
        }
        else {
            storage.removeItem("token")
            storage.removeItem("refreshToken")
            storage.removeItem('expiryDate')
            storage.removeItem('role')
            storage.removeItem('id')
            // const data = await getNewToken(refreshToken, token)
            // if (data == null)
            //     return false
            // storage.setItem("token", data.newToken)
            // storage.setItem("refreshToken", data.newRefreshToken)
            // storage.setItem('expiryDate', data.expiryDate)
            // return true
        }
    }
    return false
}
export function getToken() {
    const storage = window.localStorage;
    return storage.getItem("token")
}

export async function login(formData) {
    // requires email and password only
    // role 0 is admin
    // role 1 is not admin 
    // role 2 is not not admin XD
    const { data } = await axios.post(address + '/api/auth/login', formData);
    const accessToken = data.data['accessToken'];
    const refreshToken = data.data['refreshToken']
    const role = data.data.isAdmin;
    const expiryDate = data.data['expiryDate']
    const id = data.data['id']
    // alert(id)
    if (accessToken) {
        const storage = window.localStorage;
        storage.setItem('token', accessToken);
        storage.setItem('refreshToken', refreshToken)
        storage.setItem("role", role);
        storage.setItem('expiryDate', expiryDate)
        storage.setItem('id', id)
    }
    else {
    }
}

export async function register(formData) {
    const { data } = await axios.post(address + '/api/auth/signup', formData);
}

export function getRole() {
    const storage = window.localStorage;
    return storage.getItem("role")
}
export function getUserId() {
    return window.localStorage.getItem("id")
}