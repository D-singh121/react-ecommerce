import '../style/filterSectionaMain.scss';
import { useFilterContext } from '../Context/Filter_Context.jsx';
import { SearchFilterBox, CategoryFilter, CompanyFilter, ColorsFilter, PriceFilter } from "./index.js";

const FilterSection = () => {
  const { all_products } = useFilterContext();
  // console.log(all_products);

  const getUniqueSelectedData = (data, property) => {
    let newValue = data.map((currElem) => {
      return currElem[property];
    })


    if (property === "colors") {
      // return (newValue = ["All", ...new Set([].concat(...newValue))]);
      newValue = newValue.flat();
    }

    return (newValue = ["all", ...new Set(newValue)])
    // console.log(newValue);
  }

  const categoryOnlyData = getUniqueSelectedData(all_products, "category")

  const companiesOnlyData = getUniqueSelectedData(all_products, "company")

  const colorsData = getUniqueSelectedData(all_products, "colors");
  console.log(colorsData);

  return (
    <section style={{ padding: "1rem 1rem" }}>
      <div className="search-container">
        <SearchFilterBox />
      </div>
      <div>
        <CategoryFilter categoryValue={categoryOnlyData} />
      </div>
      <div>
        <CompanyFilter CompanyFilter={companiesOnlyData} />
      </div>

      <div>
        <ColorsFilter ColorsFilterData={colorsData} />
      </div>

      <div>
        <PriceFilter />
      </div>


    </section>
  )
}

export default FilterSection;