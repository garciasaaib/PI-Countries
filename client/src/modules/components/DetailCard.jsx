
import { useParams } from "react-router-dom";
import Activitybox from "./Activitybox";

// redux 
import useCallDetails from "../../hooks/useCallDetails"


const DetailCard = () => {
  let { id } = useParams();
  const details = useCallDetails(id)

  return (
    <div>
      {details.id
        ? <>
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
              <Activitybox key={activity.id} {...activity} />
            ))
            }
          </div>
        </>
        : <>Loading...</>
      }

    </div>
  );
}

export default DetailCard;