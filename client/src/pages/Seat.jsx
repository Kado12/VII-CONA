import * as React from 'react';
import { AppBar, Toolbar, Typography, Link, Box, Avatar, List, ListItem, ListItemButton, ListItemText, Divider, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid2';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ListNav from "../components/ListNav";

const Seat = () => {



  return (
    <div>
      <div>
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, fontWeight: 'bold', mb: 1 }}>
                  Sede del Evento
                </Typography>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, mb: 1 }}>
                  Nos complace comunicar que este maravilloso evento será realizado en el Hotel Las Dunas de Ica, el cual gracias a su infraestructura y ubicación, nos permitirá disfrutar de un ambiente agradable y seguro.
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 4 }} sx={{ transition: 'all 0.3s', p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar alt="Remy Sharp" src="./DUNAS.jpeg" sx={{ width: { sm: '100px', xs: 80 }, height: { sm: '100px', xs: 80 }, bgcolor: "#ffffff99", mb: 1 }} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 8 }} sx={{ transition: 'all 0.3s', p: 2 }}>
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, fontWeight: 'bold', mb: 1 }}>
                      Dirección
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, mb: 1 }}>
                      Av. La Angostura 400, Ica - Perú
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, fontWeight: 'bold', mb: 1 }}>
                      Teléfonos
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, mb: 1 }}>
                      (51-56) 256224
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, fontWeight: 'bold', mb: 1 }}>
                      WhatsApp
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, mb: 1 }}>
                      +51 997 570 743
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, fontWeight: 'bold', mb: 1 }}>
                      Correo
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, mb: 1 }}>
                      recepcion@lasdunashotel.com
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box component="section" sx={{ p: 2 }}>
                <section style={styles.videoSection}>
                  <iframe width="90%" height="350" src="https://www.youtube.com/embed/ZFwJiGAaDpg?si=oW2oXTMA-pwzhf3w" title="YouTube video player" style={styles.video} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </section>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
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
    maxWidth: "800px",
    border: "none",
    borderRadius: "8px",
    margin: "auto"
  },
}

export default Seat