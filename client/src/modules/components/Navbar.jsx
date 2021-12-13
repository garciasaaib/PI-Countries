import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header >
      <nav>

        <div className="logo">
          <Link to="/">Countries Logo</Link>
        </div>

        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/activity/add">Add Activity</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
