import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./product_context";

import FilterProductReducer from '../reducers/Filter_productsReducers.js' // reducer function.

const FilterContext = createContext(); //main filter context

const initialState = {
	all_products: [],
	filter_products: [], // initially empty
	grid_view: true,
	sorting_value: "lowest"
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
		dispatch({ type: "GET_SORT_VALUE", payload: userValue })
	}
	//after getting sorting event value apply sorting products.
	useEffect(() => {
		dispatch({ type: "SORTING_PRODUCTS", payload: products })
	}, [state.sorting_value]);




	useEffect(() => {
		dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
	}, [products]);


	return (
		<FilterContext.Provider
			value={{ ...state, setGridView, setListView, sorting }}>
			{children}
		</FilterContext.Provider >
	)
}


// custom hook
export const useFilterContext = () => {
	return useContext(FilterContext)
}
