import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'

import reducer from "../reducers/Product_reducers";

const AppContext = createContext(); // main store.

const productApi = "https://api.pujakaitem.com/api/products"   // api URL

const initialState = {
	isLoading: false,
	isError: false,
	products: [],
	featureProducts: [],
}


// provider for all component , we can do this way either directly use Provider in main App parent component.
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState); // insted of useState we are using useReducer hook. 


	const getProducts = async (url) => {
		dispatch({ type: "SET_LOADING" });
		try {
			const res = await axios.get(url);
			const products = await res.data;

			dispatch({ type: "API_DATA", payload: products })
			dispatch({ type: "SET_LOADING" })
			dispatch({ type: "SET_ERROR" })


		} catch (error) {
			dispatch({ type: "SET_LOADING" })
			dispatch({ type: "SET_ERROR" })
		}
	}


	useEffect(() => {
		getProducts(productApi);
	}, [])

	return (
		<AppContext.Provider value={{ ...state }}>
			{children}
			{/* // children is simply App component  */}
		</AppContext.Provider >
	)
}


// we can create a custom hook to import and fetch the main context
const useProductContext = () => {
	return useContext(AppContext);
}

export {
	AppContext,
	AppProvider,
	useProductContext // custom hook
};