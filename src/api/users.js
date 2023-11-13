
import api from "../config/axios";

// user get data
export const getUserInfo = async (userId) => {
  try {
    // Clean up the userId by removing any extra quotes
    const cleanedUserId = userId.replace(/["']/g, '');  // Remove both single and double quotes

    console.log(cleanedUserId);
    
    const response = await api.post(`/user/usergetdata`, {
      _id: cleanedUserId,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Log the full error object for detailed information

    // If there is a response from the server, set the error message accordingly
    error.message = error.response && error.response.data.message;
    throw error;
  }
};



export const getOrgInfo = async (userId) => {
  try {
    // Clean up the userId by removing any extra quotes
    const cleanedUserId = userId.replace(/["']/g, '');  // Remove both single and double quotes

    console.log(cleanedUserId);
    
    const response = await api.post(`/org/orggetdata`, {
      _id: cleanedUserId,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // Log the full error object for detailed information

    // If there is a response from the server, set the error message accordingly
    error.message = error.response && error.response.data.message;
    throw error;
  }
};


