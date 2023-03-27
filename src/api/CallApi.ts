import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const controller = new AbortController();
const AppUrl = "https://kreditur.kangjadi.com/";

const PublicHttpCall = Axios.create({
    baseURL: AppUrl ,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

const AutHttpCall = Axios.create({
    baseURL: AppUrl,
    timeout: 3000,
});

AutHttpCall.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem("loginData");
        if (token) {
            // @ts-ignore
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

export {PublicHttpCall, AutHttpCall, controller,  AppUrl};
