import axios from "../axiosConfig";

export const getExam = async () => {
  try {
    const response = await axios.get("/exams");
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};
export const getExamById = async (body) => {
  try {
    const response = await axios.get(`/exams/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};

export const getExamCount = async (body) => {
  try {
    const response = await axios.put("/exams/count");
    return response;
  } catch (error) {
    console.error("Error during editing section:", error.message);
    throw error;
  }
};
export const createExam = async (body) => {
  try {
    const response = await axios.post("/exams", body);
    return response;
  } catch (error) {
    console.error("Error during creating section:", error.message);
    throw error;
  }
};
export const editExam = async (body) => {
  try {
    const response = await axios.put(`/exams/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during editing section:", error.message);
    throw error;
  }
};

export const deleteExam = async (body) => {
  try {
    const response = await axios.put(`/exams/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during deleting section:", error.message);
    throw error;
  }
};
