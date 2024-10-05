import axios from "../config/axios.config.js";

export const addErrorApiCall = async (body) => {
    try {
      const response = await axios.post(`/api/error/add`, body);

      console.log(body,response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(body,error.response.data);
        return error.response.data;
      } else {
        return { success: false, message: "Server is Down" };
      }
    }
  };
  

  