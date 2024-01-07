import axios from "../axiosConfig";

export const getTestStudentDetailsById = async (id) => {
  try {
    const response = await axios.get(`/studentExams/${id}`);
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};
export const finishExamActionStudentById = async (body) => {
  try {
    const response = await axios.put(`/students/${body.id}`, body);
    return response;
  } catch (error) {
    console.error("Error during getting section:", error.message);
    throw error;
  }
};
