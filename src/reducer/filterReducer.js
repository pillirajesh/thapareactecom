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
      // let sort = document.getElementById("sortButton");
      // let sortValue = sort.options[sort.selectedIndex].value;

      return {
        ...state,
        sorting_value: action.payload,
      };

    //sorting products based on select element

    case "SORTING_PRODUCTS":
      let newSortedData;

      const { filter_products } = state;
      let tempSortedData = [...filter_products];

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }

        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }
      };

      newSortedData = tempSortedData.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortedData,
        isLoading: false,
      };

    case "SEARCHING_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "SEARCHED_VALUES":
      let { all_products } = state;
      let tempSearchedProducts = [...all_products];

      const { text } = state.filters;
      if (text) {
        tempSearchedProducts = tempSearchedProducts.filter((curElement) => {
          return curElement.name.toLowerCase().includes(text);
        });
      }

      return {
        ...state,
        filter_products: tempSearchedProducts,
      };

    default:
      return state;
  }
};

export default filterReducer;
