import { NavLink } from "react-router-dom";
import '../style/PageNavBreadCrumbs.scss'

const PageNavigationBreadCrumbs = ({ title }) => {
	return (
		<div className="bread-crumb--section">
			<NavLink to="/" className='Home--link' >
				Home
			</NavLink>
			/ {title}
		</div>
	)
}

export default PageNavigationBreadCrumbs