import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { Button, Input } from "./index.js"
import '../style/footer.scss';


const Footer = () => {
	return (
		<>
			<section className="footer-section">
				<div className="footer-container">
					<section className="contact-short">
						<div>
							<p>Ready to get started?</p>
							<p>Talk to us today</p>
						</div>

						<div>
							<NavLink to='/'>
								<Button type="text" label="Get Started" className="btn" />
							</NavLink>
						</div>
					</section>

					<footer>
						<div className="grid">
							<div className="footer-about">
								<h3>D.Store</h3>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
							</div>

							<div className="footer-subscribe" >
								<h3>Subscribe to get important updates</h3>
								<form action="#">
									<Input type="email" name="email" placeholder="YOUR E-MAIL" />

									<Button type="submit" label="SEND" value="subscribe" className="input-btn" />
								</form>
							</div>

							<div className="footer-social">
								<h3>Follow Us</h3>
								<div className="footer-social--icons">
									<div>
										<FaDiscord className="icons" />
									</div>
									<div>
										<FaInstagram className="icons" />
									</div>
									<div>
										<FaYoutube className="icons" />
									</div>
								</div>
							</div>


							<div className="footer-contact">
								<h3>Call Us</h3>
								<p>+91 12345678978</p>
							</div>

						</div>
						<hr style={{ marginBottom: "1rem", minWidth: "100%" }} />

						<div className="footer-bottom--section">
							<div
								className="grid-bottom"
								style={{
									display: "flex",
									alignContent: "center",
									justifyContent: "space-between",
									gap: "3rem",
									paddingBottom: "2rem"
								}}>
								<p>
									@{new Date().getFullYear()} D.Tech, All Rights Reserved
								</p>
								<div style={{ marginRight: "5rem" }}>
									<p>PRIVACY POLICY</p>
									<p>TERMS & CONDITIONS</p>
								</div>
							</div>
						</div>

					</footer>

				</div>
			</section>

		</>
	)
}

export default Footer