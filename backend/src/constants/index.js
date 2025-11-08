const API_ERROR_MESSAGE = {
  loginError: "Invalid Username or Password",
  unauthorized: "Please login first",
  forbidden: "You don't have any access",
  notFound: "Data not found",
  userAlreadyExist: "User with that E-mail / Username already exist!",
};

const API_SUCCESS_MESSAGE = {
  fetched: (title) => `${title} fetched successfully`,
  created: (title) => `${title} created successfully`,
  updated: (title) => `${title} updated successfully`,
  deleted: (title) => `${title} deleted successfully`,
  login: "Loggin Success",
};

module.exports = { API_SUCCESS_MESSAGE, API_ERROR_MESSAGE };
