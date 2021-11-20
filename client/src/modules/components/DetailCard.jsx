
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/constants";
import Activitybox from "./Activitybox";

const DetailCard = () => {
  let { id } = useParams();
  const [details, setDetails] = useState({})

  useEffect(() => {
    async function getDetails(id) {
      setDetails(await fetch(api.countryDetail(id)).then(data => data.json()))
    }
    getDetails(id)
  }, [])
  
  return (
    <div>

      <div>
        <img src={details.image} alt="" />
      </div>
      <div>
        <h3>{details.name}</h3>
        <span>{details.id}</span>
        <p>Continent: {details.continent}</p>
        <p>Capital: {details.capital}</p>
        <p>Subregion: {details.subregion}</p>
        <p>Area: {details.area}</p>
        <p>Population: {details.population}</p>
        {details.activities?.map(activity => (
            <Activitybox key={activity.id} {...activity}/>
          ))
        }
      </div>
    </div>
  );
}

export default DetailCard;