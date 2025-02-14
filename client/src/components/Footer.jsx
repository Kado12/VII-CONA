
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © 2023 Mi Proyecto. Todos los derechos reservados.
        </p>
        <ul style={styles.links}>
          <li style={styles.linkItem}>
            <a href="/" style={styles.link}>Inicio</a>
          </li>
          <li style={styles.linkItem}>
            <a href="/acerca" style={styles.link}>Acerca de</a>
          </li>
          <li style={styles.linkItem}>
            <a href="/servicios" style={styles.link}>Servicios</a>
          </li>
          <li style={styles.linkItem}>
            <a href="/contacto" style={styles.link}>Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#007BFF", // Azul principal
    color: "#fff",
    padding: "1rem 0",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  text: {
    fontSize: "0.9rem",
    marginBottom: "1rem",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    padding: 0,
  },
  linkItem: {},
  link: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#64CCC5", // Celeste
  },
};

export default Footer;