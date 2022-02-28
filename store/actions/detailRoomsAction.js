import axios from "axios";

const baseUrl = "http://18.136.193.63:8081/rooms";

export const getAllRooms = () => {
  return (dispatch) => {
    axios
      .get(baseUrl)
      .then((response) => {
        dispatch(setListAllRooms(response.data.data));
        console.log(response);
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const setListAllRooms = (payload) => {
  return {
    type: "SET_LIST_ROOMS",
    payload,
  };
};
