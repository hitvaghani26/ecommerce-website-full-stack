import { useState, useEffect } from 'react';
import { fetchData } from '../utils/api.js'; // Import the fetchData function

const useCustomApi = () => {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const customFetchData = async (url, method, params, rdata,contenttype) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetchData(url, method, params, rdata,contenttype); // Use the exported fetchData function
            setData(res?.data); 
            console.log("res is :------",res?.data);
        } catch (error) {
            setError(error);
            console.log("error is :",error.response?.status);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, customFetchData };
};

export default useCustomApi;
