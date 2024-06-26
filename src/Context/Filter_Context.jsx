import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./product_context";

import FilterProductReducer from '../reducers/Filter_productsReducers.js' // reducer function.

const FilterContext = createContext(); //main filter context

const initialState = {
	filter_products: [], // initially empty
	all_products: [],
	grid_view: true,
	sorting_value: "lowest",

	filters: {
		searchText: "",
		category: "all",
		company: "all",
		color: "all"
	},
}




export const FilterContextProvider = ({ children }) => {

	const { products } = useProductContext() //getting from main context
	// console.log(products);
	const [state, dispatch] = useReducer(FilterProductReducer, initialState)



	const setGridView = () => {
		return dispatch({ type: "SET_GRID_VIEW" })
	}
	const setListView = () => {
		return dispatch({ type: "SET_LIST_VIEW" })
	}



	//sorting selected sort option
	const sorting = (event) => {
		let userValue = event.target.value;
		return dispatch({ type: "GET_SORT_VALUE", payload: userValue })
	}

	// Search filter
	const updateFilterValue = (event) => {
		let name = event.target.name
		let value = event.target.value

		return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
	}




	useEffect(() => {
		dispatch({ type: "FILTER_PRODUCTS" });
		dispatch({ type: "SORTING_PRODUCTS" });
	}, [products, state.sorting_value, state.filters]);

	useEffect(() => {
		dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
	}, [products])


	return (
		<FilterContext.Provider
			value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}>
			{children}
		</FilterContext.Provider >
	)
}


// custom hook
export const useFilterContext = () => {
	return useContext(FilterContext)
}
