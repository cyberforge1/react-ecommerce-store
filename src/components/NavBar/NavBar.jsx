import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const NavBar = () => {
  const linkStyles = ({ isActive }) =>
    isActive ? `nav-link ${styles.link} ${styles.link_active}` : `nav-link ${styles.link}`;
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.nav}`}>
      <div className="container-fluid">
        <NavLink className={linkStyles} to="/">
          Home
        </NavLink>
        <NavLink className={linkStyles} to="/favorites">
          Favorites
        </NavLink>
        <NavLink className={linkStyles} to="/products">
          Products
        </NavLink>
        <NavLink className={linkStyles} to="/cart">
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;