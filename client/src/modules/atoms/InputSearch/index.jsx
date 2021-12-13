import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../../store/actions";
import './index.css';
import { MdSearch } from "react-icons/md";

const InputSearch = () => {
  const filters = useSelector(store => store.filters)
  const dispatch = useDispatch()
  const handleFilterName = (event) => {
    dispatch(setFilters(event.target.name, event.target.value))
  }
  return (
    <div className="input-search">
      <MdSearch className="icon"/>
      <input
        className="input"
        value={filters.filterByName}
        onChange={handleFilterName}
        name="filterByName"
        type="search"
        placeholder="Country name..."
        autoComplete="off"
      />
    </div>
  );
}

export default InputSearch;