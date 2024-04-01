import { useState } from 'react'
import '../style/ProductDetails_images.scss'

// agar hume images array me undefined aata hai to use hum default me define kar denge.
const ProductDetailsImages = ({ imgs = [{ url: "" }] }) => {
	console.log(imgs);

	const [mainImage, setMainImage] = useState(imgs[0]);

	return (
		<section className='images-container'>
			<div className="grid grid-four-column">
				{imgs.map((curElm, index) => {
					console.log(curElm);

					return (
						<img
							src={curElm.url}
							alt={curElm.filename}
							className="box-image--style"
							key={index}
							onClick={() => setMainImage(curElm)}
						/>
					);
				})}
			</div>

			<div className="main-screen">
				<img src={mainImage.url} alt={mainImage.filename} />
			</div>
		</section>
	);


}

export default ProductDetailsImages