const ProductReducer = (state, action) => {
	switch (action.type) {
		case "SET_LOADING":
			return {
				...state,
				isLoading: true,
			};

		case "API_DATA": {
			const featureData = action.payload.filter((curreElem) => {
				return curreElem.featured === true;
			});
			return {
				...state,
				isLoading: false,
				isError: false,
				products: action.payload,
				featureProducts: featureData,
			};
		}

		case "SET_ERROR":
			return {
				...state,
				isLoading: false,
				isError: true
			};

		default:
			return state;
	}
}

export default ProductReducer;