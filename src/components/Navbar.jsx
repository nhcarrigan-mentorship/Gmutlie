import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <span className={styles.logo}>💜</span>
        <span className={styles.name}>Gmutlie</span>
      </NavLink>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/share"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Share Your Story
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stories"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Stories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
