import { ProductCard } from "./index"

const GridViewComp = (products) => {

	return (
		<section>
			<div>
				{
					products && products.length > 0
						? (products.map((currElem) => {
							return <ProductCard key={currElem.id} {...currElem} />
						}, []))
						: null
				}
			</div>
		</section>
	)
}

export default GridViewComp;