
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Información de Contacto */}
        <div style={styles.contactInfo}>
          {/* Ubicación */}
          <div style={styles.contactItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={styles.icon}
            >
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
              </g>
            </svg>
            <p style={styles.contactText}>
              Consejo Departamental de Lima (CD Lima – CIP)
              <br />
              Calle Barcelona 240. San Isidro – Lima (Perú)
            </p>
          </div>

          {/* Correo Electrónico */}
          <div style={styles.contactItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={styles.icon}
            >
              <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                <path strokeLinecap="round" d="M2 11.083a4 4 0 0 1 1.706-3.277l6-4.2a4 4 0 0 1 4.588 0l6 4.2A4 4 0 0 1 22 11.083V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
                <path d="m2.5 9.5l7.001 5.501a4 4 0 0 0 4.998 0L21.5 9.5" />
              </g>
            </svg>
            <p style={styles.contactText}>
              <a href="mailto:cona_vi_comite@uni.edu.pe" style={styles.link}>
                cona_vi_comite@uni.edu.pe
              </a>
            </p>
          </div>

          {/* WhatsApp */}
          <div style={styles.contactItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={styles.icon}
            >
              <g fill="none">
                <g clipPath="url(#akarIconsWhatsappFill0)">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413s-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899a9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="akarIconsWhatsappFill0">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
              </g>
            </svg>
            <p style={styles.contactText}>
              <a href="https://wa.me/51949179632" target="_blank" rel="noopener noreferrer" style={styles.link}>
                +51 949 179 632
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr style={styles.line} />
      <div style={styles.container}>
        {/* Derechos Reservados */}
        <p style={styles.copyright}>
          © 2025 VII CONA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#007BFF", // Azul principal
    color: "#fff",
    padding: "2rem 0",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  contactInfo: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-around",
    width: "100%",
    padding: "0 1rem",
  },
  contactItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  icon: {
    marginRight: "0.5rem",
    flexShrink: 0,
  },
  contactText: {
    fontSize: ".8rem",
    lineHeight: "1.2rem",
    margin: 0,
  },
  link: {
    textDecoration: "none",
  },
  copyright: {
    fontSize: "0.9rem",
    marginTop: "1rem",
  },
  line: {
    border: "1px solid #ffffff55",
    width: "95%",
    margin: "0 auto",
    boxShadow: "0 0 10px #ffffffaa",
  },
};

export default Footer;