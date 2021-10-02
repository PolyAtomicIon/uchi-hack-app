import axios from "axios";
import { getToken } from "./jwt.service";

const api = axios.create({
    baseURL: "http://192.168.1.114:8800/api/"
});

api.interceptors.request.use((config) => {
    // config.headers = {};
    let token = getToken();
    if (token)
        config.headers["Authorization"] = `Bearer ` + token;
    return config;
})

export { api };