import axios from "../axiosConfig";

export const createSchools = async (body) => {
  try {
    const response = await axios.post("/schools", body);
    return response;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
export const editSchool = async (body) => {
  try {
    const response = await axios.put(`/schools/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
export const deleteSchool = async (body) => {
  try {
    const response = await axios.put(`/schools/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
