import axios from "axios";

const baseUrl = "http://18.136.193.63:8081/categories/1";

export const getDetailCategories = () => {
  return (dispatch) => {
    axios
      .get(baseUrl)
      .then((response) => {
        dispatch(setListDetailCategories(response.data.data));
        console.log(response);
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const setListDetailCategories = (payload) => {
  return {
    type: "SET_LIST_CATEGORIES",
    payload,
  };
};
