import axios from "axios";

const axiosInstance  = axios.create({
    baseURL : "http://localhost:4000"
})


export const request = ({...options}) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer token`;
    const onSuccess = (response) => response;
    const onError = (error) => error

    return axiosInstance(options).then(onSuccess).catch(onError);
}