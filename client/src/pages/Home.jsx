

const Home = () => {
  return (
    <div style={styles.main}>
      {/* Imagen de Portada */}
      <figure style={styles.figure}>
        <img
          src="/Portada.jpg" // Reemplaza con tu imagen
          alt="Portada"
          style={styles.image}
        />
      </figure>

      {/* Sección de Información */}
      <section style={styles.infoSection}>
        <h2 style={styles.sectionTitle}>VII Congreso Nacional del Agua - VII CONA PERÚ 2025</h2>

        {/* Objetivo General */}
        <div style={styles.subSection}>
          <h3 style={styles.subTitle}>Objetivo General</h3>
          <p style={styles.text}>
            Los acontecimientos de los últimos años nos presentan un panorama global donde lo único cierto es un notorio cambio; entre crisis financieras, pandemia global, una guerra con efectos no previstos y el cambio climático, nos retan a científicos, ingenieros, investigadores y sociedad en conjunto a abordar un entorno especialmente incierto. ¿Cómo se podrá planificar y diseñar en este entorno?
            Este evento académico se realiza con el objetivo de difundir y compartir conocimientos relacionados con la gestión de los recursos hídricos desde la teoría a la práctica, en sus diferentes disciplinas, escalas y dimensiones, fortaleciendo el puente entre la ciencia y la ingeniería para enfrentar este escenario
          </p>
        </div>

        {/* Objetivos Específicos */}
        <div style={styles.subSection}>
          <h3 style={styles.subTitle}>Objetivos Específicos</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Crear un espacio de diálogo e intercambio de experiencias en la aplicación de ciencia y técnicas para enfrentar eventos disruptivos asociados al agua, que afectan la calidad de vida en el Perú.</li>
            <li style={styles.listItem}>Difundir enfoques, técnicas y conceptos innovadores mediante charlas magistrales.</li>
            <li style={styles.listItem}>Fortalecer el nexo Agua – Energía – Alimentos.</li>
          </ul>
        </div>

        <div style={styles.subSection}>
          <h3 style={styles.subTitle}>Publico Objetivo</h3>
          <p style={styles.text}>
            Siendo el agua un recurso vital, es transversal a las diferentes actividades económicas y ecosistemas de nuestra sociedad, están llamados a participar todos los científicos, profesionales y técnicos trabajando con los recursos hídricos, en sus diferentes dimensiones: gestión pública, ciencias de la tierra, energía, salud, sociedad y arte, entre otros. Además de estudiantes y todas las personas interesadas en el tema del agua.
          </p>
        </div>
      </section>

      {/* Sección de Organizadores */}
      <section style={styles.organizersSection}>
        <h2 style={styles.sectionTitle}>Organizadores</h2>
        <div style={styles.organizersGrid}>
          {organizers.map((organizer, index) => (
            <div key={index} style={styles.organizerCard}>
              <img src={organizer.logo} alt={organizer.name} style={styles.organizerLogo} />
              <p style={styles.organizerName}>{organizer.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Local */}
      <section style={styles.videoSection}>
        <h2 style={styles.videoTitle}>Conoce Más Sobre Nosotros</h2>
        <video
          style={styles.video}
          controls
          poster="https://via.placeholder.com/800x1200" // Miniatura del video (opcional)
        >
          <source src="/Video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </section>

    </div>
  );
};

// Datos de los organizadores
const organizers = [
  {
    name: "Universidad Nacional San Luis Gonzaga de Ica",
    logo: "/unica.png", // Reemplaza con el logo del organizador
  },
  {
    name: "Facultad de Ingeniería Civil UNICA",
    logo: "/UNI.png", // Reemplaza con el logo del organizador
  },
  {
    name: "Asociación Peruana de Ingeniería Hidráulica Ambiental",
    logo: "/images.jpg", // Reemplaza con el logo del organizador
  },
  {
    name: "Colegio de Ingenieros del Perú",
    logo: "/CIP.png", // Reemplaza con el logo del organizador
  },
];

const styles = {
  main: {
    backgroundColor: "#fff",
    minWidth: "320px",
    width: "80%",
    maxWidth: "1200px",
    margin: "0 auto",
    boxShadow: "0 0 20px #ccc",

  },
  figure: {
    margin: 0,
    overflow: "hidden",
    boxShadow: "0 2px 10px black",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  infoSection: {
    padding: "2rem",
    backgroundColor: "#F8FAFC",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    color: "#007BFF", // Azul principal
    marginBottom: "1.5rem",
  },
  subSection: {
    marginBottom: "2rem",
  },
  subTitle: {
    fontSize: "2rem",
    color: "#28A745", // Verde
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    color: "#333",
    lineHeight: "1.6",
    textAlign: "justify"
  },
  list: {
    listStyle: "disc",
    paddingLeft: "1.5rem",
    margin: 0,
  },
  listItem: {
    fontSize: "1.1rem",
    color: "#333",
    lineHeight: "1.6",
    textAlign: "left",
  },
  organizersSection: {
    padding: "2rem",
    backgroundColor: "#E5E7EB",
    textAlign: "center",
  },
  organizersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  organizerCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  organizerLogo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0.5rem",
  },
  organizerName: {
    fontSize: "1rem",
    color: "#333",
    fontWeight: "bold",
  },
  videoSection: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#E5E7EB",
  },
  videoTitle: {
    fontSize: "2rem",
    color: "#007BFF",
    marginBottom: "1rem",
  },
  video: {
    width: "80%",
    maxWidth: "800px",
    height: "450px",
    border: "none",
    borderRadius: "8px",
    margin: "auto"
  },
}

export default Home;