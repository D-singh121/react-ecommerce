const FilterProductsReducer = (state, action) => {
	switch (action.type) {
		case "LOAD_FILTER_PRODUCTS":
			return {
				...state,
				filter_products: [...action.payload],// create a copy of OG array
				all_products: [...action.payload],
			};

		case "SET_GRID_VIEW":
			return {
				...state,
				grid_view: true,
			}

		case "SET_LIST_VIEW":
			return {
				...state,
				grid_view: false
			};

		// get sort value when click on select option
		case "GET_SORT_VALUE":
			let userSortValue = document.getElementById("sort");
			let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
			console.log(sort_value);

			return {
				...state,
				sorting_value: sort_value
			};

		// all sort methods 
		case "SORTING_PRODUCTS":
			let newSortData;
			let tempSortProduct = [...action.payload];

			if (state.sorting_value === "a-z") {
				newSortData = tempSortProduct.sort((a, b) => {
					return a.name.localeCompare(b.name)
				});
			}

			if (state.sorting_value === "z-a") {
				newSortData = tempSortProduct.sort((a, b) => {
					return b.name.localeCompare(a.name)
				});
			}

			if (state.sorting_value === "lowest-price") {
				newSortData = tempSortProduct.sort((a, b) => {
					return a.price - b.price;
				});
			}

			if (state.sorting_value === "highest-price") {
				newSortData = tempSortProduct.sort((a, b) => {
					return b.price - a.price;
				});
			}

			return {
				...state,
				filter_products: newSortData,
			}

		default:
			return state;
	}
};

export default FilterProductsReducer;