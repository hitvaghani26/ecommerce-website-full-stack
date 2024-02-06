import axios from 'axios';

const BASE_URL = "http://localhost:4000/api/v1";

export const fetchData = async (url,methods, params,rdata, contenttype) => {
   
      
        try {
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
            console.log("error error", error)
           
        }
   
}