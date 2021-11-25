
import { Link, useParams } from "react-router-dom";
import Activitybox from "./Activitybox";
// redux 
import useCallDetails from "../../hooks/useCallDetails"


const DetailCard = () => {
  let { id } = useParams();
  const details = useCallDetails(id)

  return (
    <div>
      <div className="block">
        <button className="btn-link start" type="button">
          <Link className="link-cover" to="/home" >Go Back</Link>
        </button>
      </div>
      {details.id
        ? (
          <div className="detailcard">
            <div className="image-marco">
              <img src={details.image} alt="" />
            </div>
            <div className="container-text">
              <h3 className="text-title">{details.name}</h3>
              <div className="grid-col-2">
                <p><b>Code:</b> {details.id}</p>
                <p><b>Continent:</b> {details.continent}</p>
                <p><b>Capital:</b> {details.capital}</p>
                <p><b>Subregion:</b> {details.subregion}</p>
                <p><b>Area:</b> {details.area}</p>
                <p><b>Population:</b> {details.population}</p>
              </div>
              {details.activities?.map(activity => (
                <Activitybox key={activity.id} {...activity} />
              ))}
            </div>
          </div>)
        : <div>Loading...</div>
      }

    </div>
  );
}

export default DetailCard;