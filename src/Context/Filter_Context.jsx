import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./product_context";

import FilterProductReducer from '../reducers/Filter_productsReducers.js'

const FilterContext = createContext();


const initialState = {
	all_products: [],
	filter_products: [], // initially empty
	grid_view: true,
	sorting_value: "lowest"
}



export const FilterContextProvider = ({ children }) => {

	const { products } = useProductContext() //main context

	const [state, dispatch] = useReducer(FilterProductReducer, initialState)


	function setGridView() {
		dispatch({ type: "SET_GRID_VIEW" })
	}


	useEffect(() => {
		dispatch({ type: "LOAD_FILTER_DATA", payload: products })
	}, [products])


	return (
		<FilterContext.Provider
			value={{ ...state, setGridView }}>
			{children}
		</FilterContext.Provider >
	)
}


// custom hook
export const useFilterContext = () => {
	return useContext(FilterContext)
}
