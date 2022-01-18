import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="parent" className="navbar navbar-expand-lg navbar-danger bg-info">
      <a className="navbar-brand" href="#">
        QuadB Assign
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
              <Link to="/form">Submit Form Here</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link to="/data">Check Records Here</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
