import { Link } from "react-router-dom"

const MiniCard = ({ id, name, image, continent, activities }) => {
  return (
    <div
      style={{
        border: "red solid 2px",
        height: "300px",
        boxSizing: "border-box",
        maxWidth: "300px"
      }}
    >
      <Link to={`/country/${id}`}>
        <div>
          <img src={image} style={{ width: "100%" }} alt="" />
        </div>
        <div>
          <h4>{name}</h4>
          <p>{continent}</p>
        </div>
      </Link>
    </div>
  );
}

export default MiniCard;