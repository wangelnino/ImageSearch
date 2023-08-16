import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
const UseAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  axios.defaults.baseURL = "https://api.unsplash.com";
  const fetchdata = async (url) => {
    try {
      setIsloading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchdata(param);
  }, [param]);
  return {
    response,
    isLoading,
    error,
    fetchdata: (url) => fetchdata(url),
  };
};
export default UseAxios;
