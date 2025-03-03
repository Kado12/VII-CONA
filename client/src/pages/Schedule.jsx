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


const createData = (time, activity) => {
  return { time, activity }
}

const rows = [
  createData('Lanzamiento público del VII CONA, página web y facebook', '15 de febrero 2025'),
  createData('Inicio de preinscripciones e inicio de Convocatoria para ponentes', '04 de marzo 2025'),
  createData('Cierre de preinscripciones', '04 de mayo 2025'),
  createData('Inicio de Inscripciones', '05 de mayo 2025'),
  createData('Cierre de envío de resúmenes de trabajos', '30 de junio 2025'),
  createData('Cierre del proceso de revisión y confirmación de ponentes', '30 de julio 2025'),
  createData('Publicación del Programa oficial', '30 de julio 2025'),
  createData('Cursos-talleres precongreso', '04 de noviembre 2025'),
  createData('Congreso', '05 al 08 de noviembre 2025'),
  createData('Publicación y exposición de resultados ', '15 de diciembre 2025')
];

const Schedule = () => {
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
                  Cronograma de Actividades
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                      <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actividad</TableCell>
                        <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Fecha límite</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.activity}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.time}
                          </TableCell>
                          <TableCell align="right">{row.activity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default Schedule