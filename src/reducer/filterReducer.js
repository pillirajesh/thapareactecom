const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,

        filter_products: [...action.payload],
        all_products: [...action.payload],
        isLoading: false,
      };

    // getting the value selected by user in select element

    case "GET_SORT_VALUES":
      let sort = document.getElementById("sortButton");
      let sortValue = sort.options[sort.selectedIndex].value;
      console.log(sortValue);
      return {
        ...state,
        sorting_value: sortValue,
      };

    //sorting products based on select element

    case "SORTING_PRODUCTS":
      let newSortedData;

      let tempSortedData = [...action.payload];
      if (state.sorting_value === "a-z") {
        newSortedData = tempSortedData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (state.sorting_value === "z-a") {
        newSortedData = tempSortedData.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      } else if (state.sorting_value === "lowest") {
        newSortedData = tempSortedData.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        newSortedData = tempSortedData.sort((a, b) => {
          return b.price - a.price;
        });
      }

      return {
        ...state,
        filter_products: newSortedData,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default filterReducer;
