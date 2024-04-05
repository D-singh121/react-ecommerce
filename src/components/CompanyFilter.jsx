import { useFilterContext } from "../Context/Filter_Context"
import '../style/companyFilter.scss';

const CompanyFilter = ({ CompanyFilter }) => {
	const { updateFilterValue } = useFilterContext();

	return (
		<div className="company-filter" >
			<h5 className="company-text">Companies</h5>
			<div className="select-box">
				<form action="#">
					<select
						name="company"
						id="company"
						onClick={updateFilterValue}
						className="filter-companies">

						{CompanyFilter && CompanyFilter.length > 0
							? CompanyFilter.map((curVal, index) => {
								// console.log(curVal);
								return (
									<option
										key={index}
										name="company"
										value={curVal}
										className="options"

									>
										{curVal}
									</option>
								)
							})
							: null}

					</select>
				</form>
			</div>
		</div>
	)
}

export default CompanyFilter;