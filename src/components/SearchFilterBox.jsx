import '../style/searchFilterBox.scss'
import { useFilterContext } from "../Context/Filter_Context.jsx";
import { Input } from "./index.js";

const SearchFilterBox = () => {
	const { filters: { searchText }, updateFilterValue } = useFilterContext();


	return (
		<div className='input-box'>
			<form onSubmit={(e) => { e.preventDefault() }}>
				<Input
					type="text"
					name="searchText"
					placeholder="Search products"
					value={searchText}
					onChange={updateFilterValue}
					userClassName="search-input"
				/>
			</form>
		</div>
	)
}

export default SearchFilterBox;