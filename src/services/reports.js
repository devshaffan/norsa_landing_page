import { getToken } from "./auth";
import address from "./address";
import axios from "axios";



export default function getTotalSalesOfCurrentUser(date) {
    const token = getToken();
    if (!token) return "token not found";
    return axios.get(address + "/api/reports/totalSalesOfCurrentUser/" + date, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
}

