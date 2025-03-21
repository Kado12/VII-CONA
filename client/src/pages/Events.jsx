import React from "react"
import { AppBar, Toolbar, Typography, Link, Box, Avatar, List, ListItem, ListItemButton, ListItemText, Divider, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ListNav from "../components/ListNav";


const createEvent = (time, title, content, image) => {
  return { time, title, content, image }
}

const rows = [
  createEvent('22 de marzo 2025', 'Los Rios en Movimiento y el diseño, construcción y mantenimiento de puentes', 'Estimados colegas y público en general, como parte de las actividades previas  por el VII Congreso Nacional del Agua la Facultad de Ingenieria Civil, junto a la APIHA, estaremos llevando a cabo un Conversatorio el dia sabado 22 de marzo 2025 a partir de las 3pm en las instalaciones del Auditorio principal del CIP - ICA. Esperamos su participacion al igual  hacemos extensiva la invitacion a los demas profesionales y estudiantes de la ÚNICA y universidades privadas.', './Portada_1.jpg')
];

const Events = () => {
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
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                  Noticias y Eventos
                </Typography>
                {rows.map((row) => (
                  <Box key={row.title} sx={{ px: 2 }}>
                    <Divider sx={{ p: '15px' }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, fontWeight: 'bold', mb: 1, pt: 1 }}>
                      {row.time}
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'left', px: 2, fontWeight: 'bold', mb: 1 }}>
                      {row.title}
                    </Typography>
                    <Typography variant="body" component="div" sx={{ flexGrow: 1, textAlign: 'justify', px: 2, mb: 1 }}>
                      {row.content}
                    </Typography>
                    <Card sx={{ maxWidth: '80%', margin: 'auto' }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={row.image}
                          alt="green iguana"
                        />
                      </CardActionArea>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default Events