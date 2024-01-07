import axios from "../axiosConfig";

export const getClasses = async () => {
  try {
    const response = await axios.get("/classes");
    return response;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
export const createClasses = async (body) => {
  try {
    const response = await axios.post("/classes", body);
    return response;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
export const editClasses = async (id) => {
  try {
    const response = await axios.put(`/classes/${id}`);
    return response;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
export const deleteClasses = async (id) => {
  try {
    const response = await axios.delete(`/classes/${id}`);
    return response;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
