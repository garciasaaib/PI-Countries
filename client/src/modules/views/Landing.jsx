import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <div className="landing-text">

          <h3>SO, YOU WANT TO TRAVEL & LIVE THROUGH DIFFERENT</h3>
          <h1>COUNTRIES</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellendus nisi aliquam, nesciunt eligendi tempore soluta dicta ducimus quos cupiditate. Nam recusandae est rem vitae dolore, nobis labore commodi eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, soluta velit. Itaque, molestias, aliquam, deserunt sint quis iusto aperiam eos odit facilis rem consequatur sit repellendus ducimus eum atque dicta!</p>
        </div>
        <div>

          <button className="btn-circular">
            <Link className="link-cover" to="/home">Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;