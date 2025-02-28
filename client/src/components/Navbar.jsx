import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado del menú desplegable
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600); // Estado para pantallas pequeñas

  // Datos del menú (íconos y nombres)
  const menuItems = [
    { name: "Inicio", icon: "home", path: "/" },
    { name: "Acerca de", icon: "info", path: "/acerca" },
    { name: "Servicios", icon: "settings", path: "/servicios" },
    { name: "Contacto", icon: "email", path: "/contacto" },
  ];

  // Función para actualizar el estado de la pantalla pequeña
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
      if (window.innerWidth >= 600) {
        setIsMenuOpen(false); // Cierra el menú si la pantalla es grande
      }
    };

    window.addEventListener("resize", handleResize); // Escucha cambios en el tamaño de la pantalla
    return () => window.removeEventListener("resize", handleResize); // Limpia el listener al desmontar
  }, []);

  return (
    <nav style={styles.navbar}>
      {/* Contenedor del Logo y Botón de Hamburguesa */}
      <div style={styles.header}>
        {/* Logo */}
        <Link to="/" style={styles.logoContainer}>
          <img src="/Logo.png" alt="Logo" style={styles.logo} />
        </Link>

        {/* Botón de Hamburguesa (visible en pantallas pequeñas) */}
        {isSmallScreen && (
          <div
            style={{ ...styles.hamburgerButton, width: isSmallScreen ? "auto" : "100%" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={styles.hamburgerIcon}
            >
              <path
                fill="currentColor"
                d={isMenuOpen ? "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}
              />
            </svg>
          </div>
        )}

        <ul
          style={{
            ...styles.menu,
            display: isSmallScreen ? "none" : "flex",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          {menuItems.map((item, index) => (
            <li key={index} style={styles.menuItem}>
              <Link to={item.path} style={styles.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={styles.icon}
                >
                  <path
                    fill="currentColor"
                    d={
                      item.icon === "home"
                        ? "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                        : item.icon === "info"
                          ? "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                          : item.icon === "settings"
                            ? "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                            : "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z"
                    }
                  />
                </svg>
                <span style={styles.menuText}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú Principal */}
      <div style={styles.slider}>
        <ul
          style={{
            ...styles.menu,
            display: isMenuOpen ? "flex" : "none",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          {menuItems.map((item, index) => (
            <li key={index} style={styles.menuItem}>
              <Link to={item.path} style={styles.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={styles.icon}
                >
                  <path
                    fill="currentColor"
                    d={
                      item.icon === "home"
                        ? "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                        : item.icon === "info"
                          ? "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                          : item.icon === "settings"
                            ? "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
                            : "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z"
                    }
                  />
                </svg>
                <span style={styles.menuText}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  slider: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "200px",
    textAlign: "left",
    right: "0",
  },
  navbar: {
    backgroundColor: "#fefefe",
    color: "#007BFF",
    padding: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    zIndex: 1000,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#007BFF",
  },
  logo: {
    height: "40px",
    width: "40px",
  },
  hamburgerButton: {
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  },
  hamburgerIcon: {
    color: "#007BFF",
    width: "24px",
    height: "24px",
  },
  menu: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "1rem",
  },
  menuItem: {
    position: "relative",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#007BFF",
    transition: "color 0.3s ease",
  },
  icon: {
    marginRight: "0.5rem",
    width: "20px",
    height: "20px",
  },
  menuText: {
    fontSize: "1rem",
    fontWeight: "500",
  },
};

export default Navbar;