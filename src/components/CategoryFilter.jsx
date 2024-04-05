import { useFilterContext } from "../Context/Filter_Context"
import { Button } from "./index"
import '../style/categoryFilter.scss';

const CategoryFilter = ({ categoryValue }) => {
	const { updateFilterValue } = useFilterContext();

	return (
		<div className="category-filter">
			<h5 className="cate-text" >Category</h5>
			<div className="button-container">
				{categoryValue && categoryValue.length > 0
					? categoryValue.map((curVal, index) => {
						return <Button
							key={index}
							userClassname="category-btns"
							type="button"
							label={curVal}
							name="category"
							value={curVal}
							onClick={updateFilterValue}
						/>
					})
					: null}
			</div>
		</div>
	)
}

export default CategoryFilter