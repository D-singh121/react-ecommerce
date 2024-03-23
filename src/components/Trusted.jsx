import '../style/Trusted.scss'


const Trusted = () => {
	return (
		<section className='trusted-section'>
			<div className="trusted-container">
				<div className='main-slider'>

					<h3 className='title-text'>Trusted by 100+ Companies</h3>
					<div className="brand-section-slider">
						{/* my 1st img  */}
						<div className="slide">
							<img
								src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
								alt="trusted-brands"
							/>
						</div>
						<div className="slide">
							<img
								src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
								alt="trusted-brands"
							/>
						</div>
						<div className="slide">
							<img
								src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
								alt="trusted-brands"
							/>
						</div>
						<div className="slide">
							<img
								src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
								alt="trusted-brands"
							/>
						</div>
						<div className="slide">
							<img
								src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
								alt="trusted-brands"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Trusted