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
			// let userSortValue = document.getElementById("sort");
			// let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
			// console.log(sort_value);

			return {
				...state,
				// sorting_value: sort_value
				sorting_value: action.payload, // by using the event method
			};

		// all sort methods 
		case "SORTING_PRODUCTS":
			{
				let newSortData;
				const { filter_products, sorting_value } = state; // destructering state.
				let tempSortProduct = [...filter_products];  // shallow copy of filter_products

				const sortingProducts = (a, b) => {
					if (sorting_value === "lowest-price") {
						return a.price - b.price;
					}

					if (sorting_value === "highest-price") {
						return b.price - a.price;
					}

					if (sorting_value === "a-z") {
						return a.name.localeCompare(b.name)
					}

					if (sorting_value === "z-a") {
						return b.name.localeCompare(a.name)
					}
				}

				newSortData = tempSortProduct.sort(sortingProducts)

				return {
					...state,
					filter_products: newSortData,
				}

			}

		case "UPDATE_FILTER_VALUE":
			{
				const { name, value } = action.payload;

				return {
					...state,
					filters: {
						...state.filters,
						[name]: value,
					}
				}
			}


		case "FILTER_PRODUCTS":

			{
				let { all_products } = state;
				let tempFilterProduct = [...all_products];

				const { searchText, category, company, color } = state.filters;

				if (searchText) {
					tempFilterProduct = tempFilterProduct.filter((curElem) => {
						return curElem.name.toLowerCase().includes(searchText);
					});
				}


				if (category !== "all") {
					tempFilterProduct = tempFilterProduct.filter((curElem) =>
						curElem.category === category);
				}





				if (company !== "all") {
					tempFilterProduct = tempFilterProduct.filter((curElem) =>
						curElem.company.toLowerCase() === company.toLowerCase());
				}


				if (color !== "all") {
					tempFilterProduct = tempFilterProduct.filter((curElem) =>
						curElem.colors.includes(color)
					);
				}

				return {
					...state,
					filter_products: tempFilterProduct,
				}
			}
		default:
			return state;
	}
};

export default FilterProductsReducer;