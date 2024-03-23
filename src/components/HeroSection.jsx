import Button from "./Button"
import { NavLink } from "react-router-dom"
import '../style/heroSection.scss';

const HeroSection = ({ mydata }) => {
	const { name } = mydata;

	return (
		<section className="wrapper">
			<div className="container">
				<div className="grid">
					<div className="hero-section-data">
						<p className="intro-data">Welcome to </p>
						<h1> {name} </h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							atque temporibus veniam doloribus libero ad error omnis voluptates
							animi! Suscipit sapiente.
						</p>
						<NavLink to='/products'>
							<Button className="btn" label="shop now" />
						</NavLink>
					</div>

					{/* our homepage image  */}
					<div className="hero-section-image">
						<figure>
							<img
								src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
								alt="hero-section-photo"
								className="img-style"
							/>
						</figure>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection