import { useFilterContext } from "../Context/Filter_Context";
import { Button } from "./index";
import { FaCheck } from "react-icons/fa";


import '../style/colorsFilter.scss'

const ColorsFilter = ({ ColorsFilterData }) => {
	console.log(ColorsFilterData);

	const { updateFilterValue, filters: { color } } = useFilterContext();
	console.log(color);
	return (
		<div className="filter-colors colors">
			<h4>Colors</h4>

			<div className="filter-color-style">
				{ColorsFilterData.map((curColor, index) => {
					if (curColor === "all") {
						return (
							<Button
								userClassname="colorFilterbtn"
								key={index}
								type="button"
								value={curColor}
								name="color"
								onClick={updateFilterValue}
								label="all"
							/>
						);
					}
					return (
						<Button
							userClassname="colorFilterbtn"
							key={index}
							type="button"
							value={curColor}
							name="color"
							style={{ backgroundColor: curColor }}
							onClick={updateFilterValue}
							label={color === curColor ? <FaCheck className="checkStyle" /> : null}
						/>
					);
				})}
			</div>
		</div>
	)
}

export default ColorsFilter;