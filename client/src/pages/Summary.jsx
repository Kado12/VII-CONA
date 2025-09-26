import React, { useState } from 'react'
import ListNav from "../components/ListNav";
import { AppBar, Toolbar, Typography, Link, Box, Avatar, List, ListItem, ListItemButton, ListItemText, Divider, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Summary = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          bgcolor: '#ff9800',
          color: 'white',
          '&:hover': { bgcolor: '#f57c00' },
          zIndex: 1000,
          boxShadow: 3
        }}
      >
        <InfoIcon />
      </IconButton>

      {/* Modal de normas */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            border: '2px solid #ff9800',
            borderRadius: 2,
            maxHeight: '90vh'
          }
        }}
      >
        <DialogTitle sx={{
          bgcolor: '#ff9800',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="h6" component="span">
            Normas para el Resumen Extendido
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ p: 3 }}>
          <Typography variant="body1" paragraph>
            El resumen extendido tendrá idéntico título al del artículo completo y se adecuará al siguiente formato:
          </Typography>

          <Box component="ul" sx={{ pl: 3 }}>
            <li>Tamaño de la hoja: A4 (21 cm x 29,7 cm).</li>
            <li>Márgenes: superior, inferior, izquierdo y derecho de 20 mm.</li>
            <li>Formato del texto: a 2 (dos) columnas, con una separación entre ellas de 6 mm.</li>
            <li>Longitud máxima: 2 (dos) páginas.</li>
            <li>No numerar las páginas.</li>
            <li>
              Tipos de letra y tamaño de fuentes:
              <Box component="ul" sx={{ pl: 3 }}>
                <li>Título: Arial 14pt, negrita y MAYÚSCULAS PEQUEÑAS (SMALL CAPS)</li>
                <li>Autores: Times New Roman 12pt</li>
                <li>Filiación/contacto: Times New Roman 8pt</li>
                <li>Títulos de apartados: Arial 10pt</li>
                <li>Cuerpo del texto: Times New Roman 9pt</li>
              </Box>
            </li>
          </Box>

          <Box sx={{
            mt: 3,
            p: 2,
            bgcolor: '#fff3e0',
            border: '1px solid #ff9800',
            borderRadius: 1
          }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#e65100' }}>
              Nota importante: Para la publicación en el libro de ponencias del CONA 2025,
              de manera extraordinaria, POR CONSIDERARLO ASÍ EL AUTOR DEL RESUMEN EXTENDIDO,
              se podrá ampliar la longitud máxima de 2 a 4 páginas.
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ bgcolor: '#ff9800', '&:hover': { bgcolor: '#f57c00' } }}
          >
            Entendido
          </Button>
        </DialogActions>
      </Dialog>

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
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                  Guía para la presentación de Resúmenes Extendidos
                </Typography>
                <Timeline className="timeline">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Descargar las <a href="https://drive.google.com/drive/folders/1uuXiogEblQPIHMD457n7WLT8wvbHmtmD?usp=sharing" style={{ color: "red", textDecoration: "none", fontWeight: "bold" }}>Normas e instrucciones</a> para la elaboración del resumen extendido</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Terminado su resumen ingresar al siguiente <a href="https://forms.gle/exfbEodFCh9iUm3h8" style={{ color: "red", textDecoration: "none", fontWeight: "bold" }}>Formulario</a> para subir sus datos</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Esperar la aprobación de su resumen extendido</TimelineContent>
                  </TimelineItem>
                </Timeline>

              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>

  )
}

export default Summary