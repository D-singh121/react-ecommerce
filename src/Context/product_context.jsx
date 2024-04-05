import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'

import productReducer from "../reducers/Product_reducers";

const AppContext = createContext(); // main store.

const productApi = "https://api.pujakaitem.com/api/products"   // api URL

const initialState = {
	isLoading: false,
	isError: false,  // common state for all
	products: [],
	featureProducts: [],

	// for single produt
	isSingleProductLoading: false,
	singleProduct: {},
}




// provider for all component , we can do this way either directly use Provider in main App parent component.
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, initialState); // insted of useState we are using useReducer hook. 


	const getProducts = async (url) => {
		dispatch({ type: "SET_LOADING" });
		try {
			const res = await axios.get(url);
			const products = await res.data;
			// console.log(products);

			dispatch({ type: "API_DATA", payload: products })
			// dispatch({ type: "SET_LOADING" })
			// dispatch({ type: "SET_ERROR" })

		} catch (error) {
			// dispatch({ type: "SET_LOADING" })
			dispatch({ type: "SET_ERROR" })
		}
	}


	// second Api call for single Product data 
	const getSIngleProduct = async (getUrl) => {
		dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" })
		try {
			const response = await axios.get(getUrl)
			const singleProductData = await response.data
			dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProductData })
			// dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" })
			// dispatch({ type: "SET_SINGLE_PRODUCT_ERR" })

		} catch (error) {
			// dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" })
			dispatch({ type: "SET_SINGLE_PRODUCT_ERR" })
		}
	}



	useEffect(() => {
		getProducts(productApi);
	}, [])



	return (
		<AppContext.Provider value={{ ...state, getSIngleProduct }}>
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