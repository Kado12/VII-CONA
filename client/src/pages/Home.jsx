import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { PlayCircle } from '@mui/icons-material';
import { ListAlt } from '@mui/icons-material';

import Slider from '../components/Slider';
import ListNav from '../components/ListNav';
import Modals from '../components/Modals'; // ← componente genérico
import './Home.css';

const Home = () => {
  const [openReel, setOpenReel] = useState(false);

  // Modal REEL solo al entrar
  useEffect(() => {
    const t = setTimeout(() => setOpenReel(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* Botón flotante → abre modal LISTA */}
      <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
        <Button
          variant="contained"
          onClick={() => setOpenReel(true)}
          sx={{
            backgroundColor: '#1e6463',
            color: 'white',
            borderRadius: '50%',
            width: 60,
            height: 60,
            minWidth: 60,
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            '&:hover': {
              backgroundColor: 'rgba(35, 143, 149, 0.78)',
              transform: 'scale(1.1)',
            },
          }}
        >
          <ListAlt sx={{ fontSize: 30 }} />
        </Button>
      </Box>

      {/* Modal REEL (solo auto-open) */}
      <Modals
        open={openReel}
        onClose={() => setOpenReel(false)}
        // videoSrc="/CONA REEL 4.mp4"
        // poster="https://via.placeholder.com/400x600"
        title="AVISO IMPORTANTE"
      >
        <Box sx={{ p: 2, textAlign: 'justify' }}>
          <Typography variant="body2" color="text.primary" marginBottom={1}>
            Se comunica a todos los participantes y poinentes del VII CONA 2025, que el evento se ha iniciado con los Cursos Pre COngreso el día de ayer 3 de noviembre, el día 4 se continuará con los Cursos Pre Congreso en el Auditorio Raúl Porras Barrenechea y en el Teatro Abraham Valdelomar en el local central de la Universidad, ubicados en la 2da cuadra de Jr. Bolivar a 1/2 cuadra de la Plaza de Armas de Ica, así mismo la asistencia a los Cursos Pre Congreso es libre para todos los inscritos en el Congreso.
            Por otro lado, el día miercoles 5 de noviembre desde las 8 am el VII CONA2025 se inciará en el Hotel Las Dunas de Ica.
          </Typography>
        </Box>
        <Box sx={{ p: 2, textAlign: 'end' }}>
          <Typography variant="body2" color="text.primary" fontWeight="bold">
            Atentamente
          </Typography>
          <Typography variant="body2" color="primary" fontWeight="bold">
            La Comisión
          </Typography>
        </Box>
      </Modals>

      <Slider />
      <Box component="section" sx={{ p: 2, bgcolor: '#56bfb6ff', textAlign: 'center', color: 'white', fontWeight: 'bold', border: 1, borderColor: '#a0bfff', borderStyle: 'solid' }}>
        <Typography variant="p" component="div" sx={{ flexGrow: 1, textShadow: '0px 0px 5px #331' }}>
          Las pre-inscripciones están abiertas. ¡No te quedes sin tu lugar!
        </Typography>
      </Box>
      <Box component="section">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 4, md: 3 }} sx={{ transition: 'all 0.3s', padding: 1 }}>
            <ListNav />
          </Grid>
          <Grid size={{ xs: 12, sm: 8, md: 9 }}>
            <Box component="section" sx={{ p: 2 }}>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                VII CONGRESO NACIONAL DEL AGUA - VII CONA PERÚ 2025
              </Typography>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'justify', px: 2 }}>
                Según el Informe ONU agua del 2024, “Actualmente casi la mitad de la población mundial sufre escasez de agua al menos durante parte del año. Una cuarta parte de la población mundial se enfrenta a niveles de estrés hídrico extremadamente altos y utiliza más del 80% de su suministro renovable anual de agua dulce. Y se prevé que el cambio climático intensifique el ciclo hídrico global y que siga aumentando la frecuencia y la gravedad de las sequías e inundaciones”.
                Por eso que debemos entender que la problemática del agua es mucho más, está vinculada directamente con la seguridad alimentaria, el progreso, la salud, la paz y la sostenibilidad del planeta.
                Nuestro país ya presenta impactos por las variaciones climáticas globales, la mas significativa es el deshielo de los glaciares en la cordillera de los Andes principalmente, lo cual crea un desbalance hídrico en todas las cuencas que alimenta hacia el pacifico o el atlántico. Pero, además las variaciones climáticas cada vez con más frecuencia originan precipitaciones en la cuenca baja, es decir en la zona de costa peruana con impactos enormes en la ciudadanía como los que tenemos en estos días. Y todo ello requiere estudio e investigaciones.
                Cada dos años, el espacio que sirve de encuentro para las reflexiones y propuestas a la problemática de los recursos hídricos es el Congreso Nacional del Agua CONA, que poco a poco en cada edición, se ha ido ganando el reconocimiento nacional e internacional, por su calidad y garantía de profesionalismos. Pretendemos mantener el nivel académico y profesional y fortalecerlo como espacio de articulación de análisis y propuestas.
                En esa medida, es que presentamos a ustedes el inicio de los trabajos para el VII Congreso Nacional del Agua – VII CONA PERU 2025, evento que realizaremos en la ciudad de Ica entre el 4 y el 8 de noviembre del 2025, teniendo como sede del evento el Hotel las Dunas de Ica.
              </Typography>
              <Divider sx={{ m: 2 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, fontWeight: 'bold', mb: 1 }}>
                Objetivos
              </Typography>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'justify', px: 4 }}>
                • Proporcionar un lugar de encuentro para compartir experiencias, promover el debate y presentar nuevos conocimientos, resultados de investigaciones y nuevas tecnologías en el campo de las ciencias del agua en nuestro país y el mundo. <br />
                • Debatir y promover estrategias y políticas de gestión del agua utilizando enfoques sistémicos.
              </Typography>
              <Divider sx={{ m: 2 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, fontWeight: 'bold', mb: 1 }}>
                Organizadores y Patrocinadores
              </Typography>
              <Box component="section" sx={{ p: 2, display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
                <Card sx={{ width: 250, height: 350 }} className="card">
                  <CardActionArea className="card-content" href="https://www.unica.edu.pe/" sx={{ width: 250, height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      height="150"
                      width="150"
                      image="./UNICA.png"
                      alt="Logo Universidad Nacional San Luis Gonzaga de Ica"
                      className="img-card"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Universidad San Luis Gonzaga de Ica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 250, height: 350 }} className="card">
                  <CardActionArea className="card-content" href="https://fic.uni.edu.pe/" sx={{ width: 250, height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      height="150"
                      image="./UNI.png"
                      alt="Logo Universidad Nacional San Luis Gonzaga de Ica"
                      className="img-card"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Facultad de Ingenieria Civil
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 250, height: 350 }} className="card">
                  <CardActionArea className="card-content" href="https://www.apiha.org.pe/" sx={{ width: 250, height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      height="150"
                      image="./APIHA.png"
                      alt="Logo Universidad Nacional San Luis Gonzaga de Ica"
                      className="img-card"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Asociación Peruana De Ingeniería Hidráulica y Ambiental
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: 250, height: 350 }} className="card">
                  <CardActionArea className="card-content" href="https://www.cip.org.pe/" sx={{ width: 250, height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      height="150"
                      image="./CIP.png"
                      alt="Logo Universidad Nacional San Luis Gonzaga de Ica"
                      className="img-card"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Consejo Departamental de Lima <br />Capitulo de Ingenieros Civiles - Ica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
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
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

const styles = {

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

export default Home