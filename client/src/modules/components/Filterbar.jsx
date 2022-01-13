import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, resetFilters } from "../../store/actions";

import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import InputSearch from "../atoms/InputSearch";

// settea los filtros en el objeto global de redux
const Filterbar = () => {
  const filters = useSelector(store => store.filters)
  const activities = useSelector(store => store.activities)
  const dispatch = useDispatch()

  const [showFilters, setShowFilters] = useState(false)

  const toggleShowFilters = () => {
    setShowFilters(!showFilters)
    if (filters.hasChanged) { dispatch(resetFilters()) }
  }

  const handleFilterName = (event) => {
    dispatch(setFilters(event.target.name, event.target.value))
  }

  // first render clean filters
  useEffect(() => dispatch(resetFilters()), [])



  return (
    <div className="filterbar">
      <div className="filterbar-top">

        <div className="btn-half">
          <button className="btn" onClick={toggleShowFilters}>
            Filters {!showFilters ? < MdKeyboardArrowDown className="icon" /> : <MdClose className="icon" />}
          </button>
        </div>

      </div>

      <div className="container-select"
        style={{ display: `${!showFilters ? 'none' : ''}` }}
      >

        <InputSearch />

        <div className="input-select">
          <label htmlFor="filterByActivity">Activity... </label>
          <select value={filters.filterByActivity} name="filterByActivity" id="filterByActivity" onChange={handleFilterName}>
            <option value=''></option>
            {activities?.map((activity) => {
              return <option key={activity.id} value={activity.id}>{activity.name}</option>
            }
            )
            }
          </select>
        </div>

        <div className="input-select">
          <label htmlFor="filterByContinent">Continent... </label>
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


        {
          /*
          activities.length && (
  
            <div className="input-select">
              <label htmlFor="">Activity ...</label>
              <select value={filters.orderByName} name="orderByName" id="" onChange={handleFilterName}>
                <option value=''>All</option>
  
                <option value='asc'>Asc</option>
                <option value='des'>Des</option>
              </select>
            </div>
          )
          */
        }

        <div className="input-select">
          <label htmlFor="">Order Name...</label>
          <select value={filters.orderByName} name="orderByName" id="" onChange={handleFilterName}>
            <option value=''></option>
            <option value='asc'>Asc</option>
            <option value='des'>Des</option>
          </select>
        </div>

        <div className="input-select" htmlFor="orderByPopulation">
          <label htmlFor="orderByPopulation">Order Population...</label>
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