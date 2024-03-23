import { Link } from "react-router-dom"
import "../style/noPage.scss"


const NoPage = () => {
	return (
		<section className="container">
			<h1 className="_404">404</h1>
			<Link to="/">
				<h2 className="text">
					We Could't Found Page Please go back to Home page
				</h2>
			</Link>
		</section>
	)
}

export default NoPage;