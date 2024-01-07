import axios from "../axiosConfig";

export const getStudent = async () => {
  try {
    const response = await axios.get("/students");
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};
export const getStudentById = async (body) => {
  try {
    const response = await axios.get(`/students/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};

export const createStudent = async (body) => {
  try {
    const response = await axios.post("/students", body);
    return response;
  } catch (error) {
    console.error("Error during creating section:", error.message);
    throw error;
  }
};
export const editStudent = async (body) => {
  try {
    const response = await axios.put(`/students/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during editing section:", error.message);
    throw error;
  }
};
export const editStudentTestById = async (body) => {
  try {
    const response = await axios.put(`/studentTests/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during editing section:", error.message);
    throw error;
  }
};
export const deleteStudent = async (body) => {
  try {
    const response = await axios.put(`/students/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during deleting section:", error.message);
    throw error;
  }
};
