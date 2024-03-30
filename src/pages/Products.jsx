import { FilterSection, ProductList, Product_Sort } from "../components/index.js"
import '../style/mainProductsPage.scss'

const Products = () => {

  return (
    <section className="PrductsPage-section">
      <div className="products-container">
        <div className="filter-product-Section">
          <FilterSection />
        </div>

        <section className="product-listing--main">
          <div className="sort-filter">
            <Product_Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>

      </div>
    </section>

  )
}

export default Products