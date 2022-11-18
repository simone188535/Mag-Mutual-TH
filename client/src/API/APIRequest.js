import axios from "axios";

const getAllUsers = () => axios.get("/api/v1/users");

  // const queryValue = {
  //     id: null,
  //     email: null,
  //     profession: null,
  //   };

const getUser = (queryValue) => axios.get(`/api/v1/users/get-user`, {
    params: {
      ...queryValue,
    },
  });


  // const queryValue = {
  //     to: null,
  //     from: null,
  //   };
const getUsersBetweenDates = (queryValue) =>
  axios.get(`/api/v1/users/date-between`, {
    params: {
      ...queryValue,
    },
  });

export { getAllUsers, getUser, getUsersBetweenDates };
