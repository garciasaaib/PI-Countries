import { Link } from "react-router-dom"

const MiniCard = ({ id, name, image, continent, population, activity}) => {
  return (
    <div className="minicard">
      <Link className="link-cover" to={`/country/${id}`}>
        <div className="minicard-image container-image">
          <img src={image} alt="" />
        </div>
        <div className="container-text">
          <p className="text-title">{name}</p>
          <p><b>Continent: </b>{continent}</p>
          <p><b>Population: </b>{population}</p>
        </div>
      </Link>
    </div>
  );
}

export default MiniCard;