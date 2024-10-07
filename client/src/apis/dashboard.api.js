import axios from "../config/axios.config.js";

export const getUserStats = async (userId) => {
  try {
    const response = await axios.post('http://localhost:5000/api/dashboard/getUserStats', {
        userId: userId,
    });    
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { success: false, message: "Server is Down" };
    }
  }
};


export const recentErrors = async (page) => {
    try {
      const response = await axios.post('http://localhost:5000/api/dashboard/getUserErrors',{
        page:page,
      });    
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return { success: false, message: "Server is Down" };
      }
    }
  };



  export const dashboard_leaderboardTopUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dashboard/getTopUsers');    
      return response.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return { success: false, message: "Server is Down" };
      }
    }
  };



