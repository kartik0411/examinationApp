import axios from "../axiosConfig";

export const getQuestion = async () => {
  try {
    const response = await axios.get("/questions");
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};

export const createQuestion = async (body) => {
  try {
    const response = await axios.post("/questions", body);
    return response;
  } catch (error) {
    console.error("Error during creating section:", error.message);
    throw error;
  }
};
export const editQuestion = async (body) => {
  try {
    const response = await axios.put(`/questions/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during editing section:", error.message);
    throw error;
  }
};
export const deleteQuestion = async (body) => {
  try {
    const response = await axios.put(`/questions/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during deleting section:", error.message);
    throw error;
  }
};
