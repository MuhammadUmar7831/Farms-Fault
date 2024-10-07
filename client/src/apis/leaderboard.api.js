import axios from "../config/axios.config.js";

export const getleaderBoardRankedUsers = async (time="") => {
  try {

    console.log("time: ",time)
    const response = await axios.post('http://localhost:5000/api/leaderboard/getleaderboardUsers', {
        time: time,
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






