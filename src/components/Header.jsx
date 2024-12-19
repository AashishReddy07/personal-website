import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <h1 className={styles.logo}>Aashish Reddy</h1>
        </Link>
        <nav className={styles.nav}>
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