const About = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Acerca de Nosotros</h2>
      <p style={styles.text}>
        Aquí puedes describir tu empresa o proyecto.
      </p>
    </div>
  );
};

const styles = {
  page: {
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    color: "#007BFF", // Azul principal
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    color: "#333",
  },
};

export default About;