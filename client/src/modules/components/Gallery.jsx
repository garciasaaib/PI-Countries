// components
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useCallCountries from "../../hooks/useCallCountries";
import MiniCard from "../components/MiniCard";
import PageButtons from "./PageButtons";

import {filterGalleryLogic} from "../../hooks/filterGalleryLogic"
import { resetFilters } from "../../store/actions";

const Gallery = () => {
  const dispatch = useDispatch()
  let countries = useCallCountries()
  const filters = useSelector(store => store.filters)
  const [filteredCountries, setFilteredCountries] = useState([])
  
  // paginado
  const [page, setPage] = useState({})


  // primer render
  useEffect(() => {
    setFilteredCountries(countries)
    setPage({
      currentPage: 1,
      lastPage: Math.ceil(countries.length / 9),
      slicedNumber: 0
    })
  }, [countries])

  // filtrado
  useEffect(() => {
    // newFilter()
    filterGalleryLogic(filters, countries, filteredCountries, setFilteredCountries, setPage)
  }, [filters])

  return (
    <>
      <button className="btn" onClick={() => dispatch(resetFilters())}>Reset Filters</button>
     {page.currentPage && <PageButtons pages={page} setCurrentPage={setPage} />}
      <div className="gallery">
        {filteredCountries.slice(page.slicedNumber, page.slicedNumber + 9).map((country) =>
          <MiniCard
            key={country.id}
            {...country}
          >
            {country.name}
          </MiniCard>
        )}
      </div>
     {page.currentPage && <PageButtons pages={page} setCurrentPage={setPage} />}

    </>
  );
}

export default Gallery;