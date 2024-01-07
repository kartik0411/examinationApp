import axios from "../axiosConfig";

export const login = async (body) => {
  try {
    const response = await axios.post("/login", body);
    return response;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
export const register = async (body) => {
  try {
    const response = await axios.post("/register", body);
    console.log(response, "register response");
    if (!response.ok) {
      throw new Error("Registeration failed");
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
