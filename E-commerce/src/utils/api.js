import axios from 'axios';

const BASE_URL = "http://localhost:4000/api/v1";
const TOKEN = "";

const header = {};

export const fetchData = async (url,methods, params,rdata, contenttype) => {
    try {
        console.log("api call", rdata);
        const res = await axios({
            method: methods,
            url:BASE_URL + url,
            data:rdata,
            headers: {'Content-Type': contenttype,},
            withCredentials: true,
            params

        })
        return res;
    } catch (error) {
        console.log ("error in axios", error)
    }
}