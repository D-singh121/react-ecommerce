import { useFilterContext } from "../Context/Filter_Context";
import { GridViewComp, ListViewComp } from "./index.js";

const ProductList = () => {
	const { filter_products, setGridView } = useFilterContext();

	console.log(filter_products);

	return (
		<section>
			{setGridView === true
				? <GridViewComp products={filter_products} />
				: <ListViewComp products={filter_products} />
			}

		</section>
	)
}

export default ProductList;