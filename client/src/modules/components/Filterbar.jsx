import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, resetFilters } from "../../store/actions";

// settea los filtros en el objeto global de redux
const Filterbar = () => {
  const filters = useSelector(store => store.filters)
  const dispatch = useDispatch()

  const handleFilterName = (event) => {
    dispatch(setFilters(event.target.name, event.target.value))
  }

  useEffect(() => {
    dispatch(resetFilters()) // cleanfilters
  }, [])

  return (
    <div className="filterbar">
      <input
        value={filters.filterByName}
        onChange={handleFilterName}
        name="filterByName"
        type="search"
        placeholder="Country name..."
        autoComplete="off"
      />

      <div className="container-select">

        <div className="input-select">
          <label htmlFor="filterByContinent">Continent: </label>
          <select value={filters.filterByContinent} name="filterByContinent" id="filterByContinent" onChange={handleFilterName}>
            <option value=''>All</option>
            <option value='africa'>Africa</option>
            <option value='asia'>Asia</option>
            <option value='america'>America</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
            <option value='antarctica'>Antarctica</option>
          </select>
        </div>

        <div className="input-select">
          <label htmlFor="">By Country</label>
          <select value={filters.orderByName} name="orderByName" id="" onChange={handleFilterName}>
            <option value=''></option>
            <option value='asc'>Asc</option>
            <option value='des'>Des</option>
          </select>
        </div>

        <div className="input-select" htmlFor="orderByPopulation">
          <label htmlFor="orderByPopulation">By Population:</label>
          <select value={filters.orderByPopulation} name="orderByPopulation" id="orderByPopulation" onChange={handleFilterName} >
            <option value=''></option>
            <option value='asc'>Asc</option>
            <option value='des'>Des</option>
          </select>
        </div>
      </div>

    </div>
  );
}

export default Filterbar;