const Contact = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Contacto</h2>
      <p style={styles.text}>
        Puedes contactarnos a través de este formulario.
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

export default Contact;