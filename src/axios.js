import axios from "axios"

axiosClient = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,

})

export default axiosClient