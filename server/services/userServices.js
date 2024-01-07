const CustomError = require("../utils/customError");
const {
  getUserInstance,
  createUserInstance,
  getSchoolsInstances,
} = require("../dao/userDao");
const {
  createJWT,
  comparePasswordHash,
  hashPassword,
} = require("../utils/common");

const getLoggedInUser = async (body) => {
  try {
    const { role, userName, password } = body;
    if (!role || !userName || !password) {
      throw new CustomError(401, "Invalid login credentials.");
    }
    let userObj = await getUserInstance({ userName });
    console.log(userObj);
    if (!userObj || role !== userObj.role) {
      throw new CustomError(404, "Invalid login credentials.");
    }
    const { _id, role: userRole } = userObj;
    if (await comparePasswordHash(password, userObj.password)) {
      const token = await createJWT(
        {
          role: userRole,
          _id,
        },
        undefined,
        { expiresIn: "15h" }
      );
      return {
        message: "User successfully authenticated.",
        data: { token, userObj },
      };
    } else {
      throw new CustomError(404, "Invalid login credentials.");
    }
  } catch (error) {
    console.log(error);
    throw new CustomError(500, "Invalid login credentials.", error.message);
  }
};

const createUser = async (body) => {
  try {
    const { userName, role, password } = body;
    if (!userName || !role || !password) {
      throw new CustomError(400, "Unable to Signup");
    }
    const user = await getUserInstance({ userName });
    if (user) {
      throw new CustomError(400, "Username already exists");
    }
    const hash = await hashPassword(password);
    body.password = hash;
    let userObj = await createUserInstance(body);
    return {
      message: "Registered successfully",
      ...userObj,
    };
  } catch (error) {
    console.log(error);
    throw new CustomError(500, error.message);
  }
};

const getAllchools = async () => {
  try {
    const scholInstances = await getSchoolsInstances({ role: "subAdmin" });
    return {
      message: "Schools fetched successfully",
      schools: scholInstances,
    };
  } catch (error) {
    console.log(error);
    throw new CustomError(500, error.message);
  }
};

module.exports = {
  getLoggedInUser,
  createUser,
  getAllchools,
};
