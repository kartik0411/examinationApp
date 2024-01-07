import axios from "../axiosConfig";

export const getTest = async () => {
  try {
    const response = await axios.get("/tests");
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};
export const getTestById = async (body) => {
  try {
    const response = await axios.get(`/tests/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};

export const getTestByGroupId = async (body) => {
  try {
    const response = await axios.put(`/tests/ByTypes/${body.type}`, body);
    return response;
  } catch (error) {
    console.error("Error during editing section:", error.message);
    throw error;
  }
};

export const createTest = async (body) => {
  try {
    const response = await axios.post("/tests", body);
    return response;
  } catch (error) {
    console.error("Error during creating section:", error.message);
    throw error;
  }
};
export const editTest = async (body) => {
  try {
    const response = await axios.put(`/tests/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during editing section:", error.message);
    throw error;
  }
};

export const deleteTest = async (body) => {
  try {
    const response = await axios.put(`/tests/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during deleting section:", error.message);
    throw error;
  }
};
