import axios from "../config/axios.config.js";

export const verifyApiCall = async () => {
  try {
    const response = await axios.get(`/api/auth/verify`);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { success: false, message: "Server is Down" };
    }
  }
};

export const signinApiCall = async (body) => {
  try {
    const response = await axios.post(`/api/auth/signin`, body);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { success: false, message: "Server is Down" };
    }
  }
};

export const signupApiCall = async (body) => {
  try {
    const response = await axios.post(`/api/auth/signup`, body);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { success: false, message: "Server is Down" };
    }
  }
};

export const getUserApiCall = async () => {
  try {
    const response = await axios.get("/api/auth/get/user");
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { success: false, message: "Server is Down" };
    }
  }
};

export const deletetUserApiCall = async () => {
  try {
    const response = await axios.delete("/api/auth/delete/user");
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { success: false, message: "Server is Down" };
    }
  }
};

export const logoutApiCall = async () => {
  try {
    const response = await axios.delete("/api/auth/logout");
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { success: false, message: "Server is Down" };
    }
  }
};
