import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { api } from "../../utils/constants";

// components
import MiniCard from "../components/MiniCard";

const Gallery = () => {
  let location = useLocation()

  // get countries list
  const [countriesList, setCountriesList] = useState([])
  useEffect(() => {
    async function getCountries() {
      const response = await fetch(api.countriesList())
        .then(data => data.json())
      setCountriesList(response)
    }
    getCountries()
  }, [])
  return (
    <div>
      {countriesList.map((country) =>
        <MiniCard 
          key={country.id} 
          {...country}
        >
          {country.name}
        </MiniCard>
      )}
    </div>
  );
}

export default Gallery;