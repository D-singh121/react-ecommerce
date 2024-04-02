import '../style/filterSectionaMain.scss';
import { SearchFilterBox } from "./index.js";

const FilterSection = () => {
  return (
    <section>
      <div className="search-container">
        <SearchFilterBox />
      </div>
    </section>
  )
}

export default FilterSection;