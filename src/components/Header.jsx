import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="header-container">
        <Link to="/">
          <h1 className="header-logo">Aashish Reddy</h1>
        </Link>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;