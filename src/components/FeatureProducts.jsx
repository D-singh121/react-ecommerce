import { useProductContext } from "../Context/product_context"
import "../style/featureProducts.scss"
import { ProductCard } from "./index.js";


const FeatureProducts = () => {
	const { isLoading, featureProducts } = useProductContext();  // this is custom hook.
	console.log(featureProducts);


	return (
		<section className="feature-section">
			{isLoading && <p>Loading plase wait...</p>}

			<div className="feature-container">
				<div id="feature-text">
					<p>CHECK NOW!</p>
					<h3>Our Feature Products</h3>
				</div>

				<div className="feature-product-container">
					{featureProducts && featureProducts.length
						? featureProducts.map((product) => {
							return <ProductCard key={product.id} {...product} />
						})
						: null}
				</div>
			</div>

		</section>
	)
}

export default FeatureProducts;