import { BsGrid, BsList } from "react-icons/bs";



const Product_Sort = () => {
  return (
    <section>
      <div className="sort-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <BsGrid />
          <BsList />
        </div>

        <div>
          <p>
            12 Total Products
          </p>
        </div>

        <div>
          <select id="" name="" >
            <option value="">A to Z</option>
            <option value="">Z to A</option>
            <option value="">Price High to Low</option>
            <option value="">Price Low to High</option>
            <option value="">Rating High to Low</option>
            <option value="">Rating Low to High</option>
          </select>
        </div>

      </div>
    </section>

  )

}

export default Product_Sort