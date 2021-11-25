// components
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useCallCountries from "../../hooks/useCallCountries";
import MiniCard from "../components/MiniCard";
import PageButtons from "./PageButtons";

import {filterGalleryLogic} from "../../hooks/filterGalleryLogic"

const Gallery = () => {
  let countries = useCallCountries()
  const filters = useSelector(store => store.filters)
  const [filteredCountries, setFilteredCountries] = useState([])

  // primer render
  useEffect(() => {
    setFilteredCountries(countries)
  }, [countries])

  // filtrado
  useEffect(() => {
    // newFilter()
    filterGalleryLogic(filters, countries, filteredCountries, setFilteredCountries)
    setLastPage(Math.ceil(filteredCountries.length / 9))
  }, [filters])

  // paginado
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(Math.ceil(countries.length / 9))



  return (
    <>
      <PageButtons currentPage={page} setCurrentPage={setPage} lastPage={lastPage} />
      <div className="gallery">
        {filteredCountries.map((country) =>
          <MiniCard
            key={country.id}
            {...country}
          >
            {country.name}
          </MiniCard>
        )}
      </div>
      <PageButtons currentPage={page} setCurrentPage={setPage} lastPage={lastPage} />
    </>
  );
}

export default Gallery;