import axios from "axios";

const baseUrl = "http://18.136.193.63:8081/categories/";

export const getDetailCategories = (id) => {
  return (dispatch) => {
    axios
      .get(baseUrl + id)
      .then((response) => {
        const addLoc = addLocation(response.data.data);
        console.log("cek addloc", addLoc);
        dispatch(setListDetailCategories(addLoc));
        console.log(response);
      })
      .catch((error) => {
        console.log("cek error", error);
      });
  };
};

export const addLocation = (data) => {
  let newData = data;
  const city = data.city.toLowerCase();
  if (city === "bandung") {
    newData.latitude = -6.905977;
    newData.longitude = 107.613144;
  } else if (city === "jogja") {
    newData.latitude = -7.797068;
    newData.longitude = 110.370529;
  } else if (city === "bali") {
    newData.latitude = -8.409518;
    newData.longitude = 115.188919;
  } else if (city === "malang") {
    newData.latitude = -7.983908;
    newData.longitude = 112.621391;
  }

  return newData;
};

export const filterBed = (sizeBed) => {
  return (dispatch, getState) => {
    console.warn("cek input", sizeBed);
    const listAllCategory = getState().categoriesDetailReducer.listForFilter;
    console.warn("Cek data category", listAllCategory.Rooms);
    const filterByBed = listAllCategory.Rooms.filter(
      (data) => data.size_bed.toLowerCase() === sizeBed.toLowerCase()
    );
    listAllCategory.Rooms = filterByBed;
    console.warn("cek list new category", listAllCategory);
    dispatch(setListFilter(listAllCategory));
  };
};

export const setListDetailCategories = (payload) => {
  return {
    type: "SET_LIST_CATEGORIES",
    payload,
  };
};

export const setListFilter = (payload) => {
  return {
    type: "SET_LIST_FILTER",
    payload,
  };
};
