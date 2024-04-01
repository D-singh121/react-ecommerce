import { BsGrid, BsList } from "react-icons/bs";
import { Button } from "./index";
import { useFilterContext } from "../Context/Filter_Context";

import '../style/Product_sort.scss'

const Product_Sort = () => {
  const { grid_view, filter_products, setGridView, setListView, sorting } = useFilterContext();


  return (
    <section>
      <div className="sort-container" >
        <div className="sorting--list-grid">
          <Button
            className={grid_view ? "active sort-btn" : "sort-btn"}
            onClick={setGridView}
            label={<BsGrid className="icon" />}

          />

          <Button
            className={!grid_view ? "active sort-btn" : "sort-btn"}
            onClick={setListView}
            label={<BsList className="icon" />}

          />

        </div>

        <div className="product-data">
          <p>
            {`${filter_products.length} Product Available`}
          </p>
        </div>

        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort">Sort By: </label>
            <select
              name="sort"
              id="sort"
              className="sort-selection--style"
              onClick={sorting}>

              <option value="a-z">Product A-Z</option>
              <option value="#" disabled></option>
              <option value="z-a">Product Z-A</option>
              <option value="#" disabled></option>
              <option value="lowest-price">Price Low to High</option>
              <option value="#" disabled></option>
              <option value="highest-price">Price High to Low</option>
              {/* <option value="#" disabled></option>
              <option value="rating-highest">Rating High to Low</option>
              <option value="#" disabled></option>
              <option value="rating-lowest">Rating Low to High</option> */}
            </select>
          </form>
        </div>

      </div>
    </section>

  )

}

export default Product_Sort