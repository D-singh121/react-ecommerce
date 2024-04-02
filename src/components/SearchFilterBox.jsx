import '../style/searchFilterBox.scss'
import { useFilterContext } from "../Context/Filter_Context.jsx";
import { Input } from "./index.js";
// import { useState } from "react";

const SearchFilterBox = () => {
	// const [inputValue, setInputValue] = useState("");
	const { filters: { searchText }, updateFilterValue } = useFilterContext();


	return (
		<div>
			<form onSubmit={(e) => { e.preventDefault() }}>
				<Input
					type="text"
					name="searchText"
					placeholder="Search products"
					value={searchText}
					onChange={updateFilterValue}
				/>
			</form>
		</div>
	)
}

export default SearchFilterBox;