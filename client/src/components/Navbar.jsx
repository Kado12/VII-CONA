import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <figure style={styles.logo}>
          <img
            src="/Logo.png" // Reemplaza con tu imagen
            alt="Logo"
            style={styles.image}
          />
        </figure>
        <ul style={styles.menu}>
          <li style={styles.menuItem}>
            <Link to="/" style={styles.link}>
              Inicio
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/acerca" style={styles.link}>
              Acerca de
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/servicios" style={styles.link}>
              Servicios
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/contacto" style={styles.link}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#fefefe", // Azul principal
    color: "#007BFF",
    padding: "1rem",
    boxShadow: "5px 5px 10px black",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    height: "60px",
    width: "60px",
  },
  menu: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  menuItem: {
    marginLeft: "1rem",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#64CCC5", // Celeste
  },
};

export default Navbar;