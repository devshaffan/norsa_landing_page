import { getToken } from "./auth";
import address from "./address";
import axios from "axios";



export default function getMerchantTransaction(date) {
    const token = getToken();
    if (!token) return "token not found";
    return axios.get(address + "/api/reports/merchantTransactionLanding/" + date, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
}

