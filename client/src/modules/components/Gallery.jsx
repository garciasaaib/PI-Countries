import { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getCountries} from "../../store/actions";

// components
import MiniCard from "../components/MiniCard";

const Gallery = () => {
  const countries = useSelector((store) => store.countries)
  const dispatch = useDispatch()
  // get countries list
  useEffect(() => {
    dispatch(getCountries())
  }, [])



  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        maxWidth: "1000px",
        margin: "auto",
        gap: "1rem",
      }}
    >
      {countries.map((country) =>
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