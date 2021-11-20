import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <img src="https://m.media-amazon.com/images/I/91cPovJ6FnL._AC_SL1500_.jpg" alt="" />
      <button>
        <Link to="/home">Enter</Link>
      </button>
    </div>
  );
}

export default Landing;