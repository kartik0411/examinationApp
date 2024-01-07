import axios from "../axiosConfig";

export const getSection = async () => {
  try {
    const response = await axios.get("/sections");
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};

export const createSection = async (body) => {
  try {
    const response = await axios.post("/sections", body);
    return response;
  } catch (error) {
    console.error("Error during creating section:", error.message);
    throw error;
  }
};
export const editSection = async (body) => {
  try {
    const response = await axios.put(`/sections/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during editing section:", error.message);
    throw error;
  }
};
export const deleteSection = async (body) => {
  try {
    const response = await axios.put(`/sections/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during deleting section:", error.message);
    throw error;
  }
};
