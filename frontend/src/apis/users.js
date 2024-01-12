import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/users",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("token")
    )}`;
  }
  return req;
});

const usersAPI = {
  register: async (userData) => {
    console.log(userData);
    try {
      const response = await API.post(`/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  login: async (loginData) => {
    try {
      const response = await API.post(`/login`, loginData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Get user profile
  getUserProfile: async (userId) => {
    try {
      const response = await API.get(`/${userId}/profile`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  updateUser: async (userData) => {
    try {
      const response = await API.put(`/seller/${userData._id}`, userData);
      console.log("bjcdbjdc");
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
  },

  updateProfile: async (userId, updatedData) => {
    try {
      const response = await API.put(`/${userId}/profile`, updatedData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  deleteUser: async (userId) => {
    try {
      const response = await API.delete(`/${userId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getAllUsers: async () => {
    try {
      const response = await API.get(``);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  getAllSellers: async () => {
    try {
      const response = await API.get(`/user_seller`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default usersAPI;
export { API };
