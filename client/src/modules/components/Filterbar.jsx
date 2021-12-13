import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, resetFilters } from "../../store/actions";

import InputSearch from "../atoms/InputSearch";

// settea los filtros en el objeto global de redux
const Filterbar = () => {
  const filters = useSelector(store => store.filters)
  const dispatch = useDispatch()

  const [showFilters, setShowFilters] = useState(false)

  const toggleShowFilters = () => {
    // if i want to filter
    if(!showFilters)
      console.log('es falsy')
    else if(showFilters)
      console.log('es trully')

    // setShowFilters()
    // dispatch(resetFilters())
  }

  const handleFilterName = (event) => {
    dispatch(setFilters(event.target.name, event.target.value))
  }

  // first render clean filters
  useEffect(() => dispatch(resetFilters()),[])

 

  return (
    <div className="filterbar">
      <div className="filterbar-top">
        <InputSearch />

        <button className="btn" onClick={toggleShowFilters}>
          {!showFilters ? 'Show Filters' : 'Hides Filters'}
        </button>

      </div>

      <div className="container-select"
        style={{ display: `${!showFilters ? 'none' : 'flex'}` }}
      >


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

    </div >
  );
}

export default Filterbar;