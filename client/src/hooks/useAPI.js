import axios from "axios";

//I want this to fetch some data from an api

const useAPI = (url, state) => {
  axios.get(url).then(response => {
    console.log(response.data);
    return (response.data)
  });
  
};

export default useAPI;
