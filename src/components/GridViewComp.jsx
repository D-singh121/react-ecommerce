import { ProductCard } from "./index"

const GridViewComp = ({ products }) => {
	// console.log(products);

	return (
		<section>
			<div style={{ padding: " 2rem 2rem", backgroundColor: "#FFF", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
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