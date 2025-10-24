import React from "react"
import { AppBar, Toolbar, Typography, Link, Box, Avatar, List, ListItem, ListItemButton, ListItemText, Divider, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ListNav from "../components/ListNav";

const createData = (category, inscription) => {
   return { category, inscription }
}

const rows = [
   createData('PROFESIONALES', 'S/150.00'),
   createData('ESTUDIANTES', 'S/80.00')
];

const PreCongress = () => {


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
                           Cursos Pre-Congreso
                        </Typography>
                        <Box component="section" sx={{ p: 2, bgcolor: '#f5f5f5', border: 1, borderColor: '#a0bfff', borderStyle: 'solid' }}>
                           <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                              Programación
                           </Typography>
                           <Grid container spacing={2}>
                              <Grid size={{ xs: 12, md: 6 }}>
                                 <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 1 }}>
                                    Lunes 03 de Noviembre
                                 </Typography>
                                 <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'start', px: 2, fontWeight: 'bold', mb: 1, mt: 2 }}>
                                    09:00 am - 01:00 pm <strong style={{ color: '#cfebe9ff', padding: '2px 4px', borderRadius: '8px', backgroundColor: 'rgba(22, 177, 164, 0.7)' }}>CLASE TEÓRICA</strong>
                                 </Typography>
                                 <ul style={{ textAlign: 'start', fontSize: '1rem' }}>
                                    <li>Conceptos básicos de la reducción del riesgo de desastres</li>
                                    <li>Clasificación de movimientos de masas</li>
                                    <li>Mecanismo de generación de deslizamientos de tierra</li>
                                    <li>Mecanismo de generación de flujo de escombros</li>
                                 </ul>
                                 <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'start', px: 2, fontWeight: 'bold', mb: 1, mt: 2 }}>
                                    01:00 pm - 05:00 pm <strong style={{ color: '#cfebe9ff', padding: '2px 4px', borderRadius: '8px', backgroundColor: 'rgba(22, 177, 164, 0.7)' }}>CLASE PRÁCTICA</strong>
                                 </Typography>
                                 <ul style={{ textAlign: 'start', fontSize: '1rem' }}>
                                    <li><strong>SHALSTAB</strong> para simulación de deslizamientos de tierra superficiales</li>
                                    <li><strong>MORPHO-2DH</strong> para simulación de flujo de escombros</li>
                                    <li>Gestión integrada de desastres relacionados con sedimentos</li>
                                 </ul>
                              </Grid>
                              <Grid size={{ xs: 12, md: 6 }}>
                                 <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 1 }}>
                                    Martes 04 de Noviembre
                                 </Typography>
                                 <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'start', px: 2, fontWeight: 'bold', mb: 1, mt: 2 }}>
                                    09:00 am
                                 </Typography>
                                 <ul style={{ textAlign: 'start', fontSize: '1rem' }}>
                                    <li>Visita a campo</li>
                                 </ul>
                                 <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'start', px: 2, fontWeight: 'bold', mb: 1, mt: 2 }}>
                                    05:00 pm
                                 </Typography>
                                 <ul style={{ textAlign: 'start', fontSize: '1rem' }}>
                                    <li>Reunión con especialistas</li>
                                 </ul>
                              </Grid>
                           </Grid>

                        </Box>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', py: 2, fontWeight: 'bold', mb: 2 }}>
                           Inscripciones Curso Pre-Congreso
                        </Typography>
                        <TableContainer component={Paper}>
                           <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                                 <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>CATEGORÍA</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>INSCRIPCION</TableCell>
                                 </TableRow>
                              </TableHead>
                              <TableBody>
                                 {rows.map((row) => (
                                    <TableRow
                                       key={row.category}
                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                       <TableCell component="th" scope="row">
                                          {row.category}
                                       </TableCell>
                                       <TableCell align="center">{row.inscription}</TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        </TableContainer>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', py: 2, fontWeight: 'bold', mb: 2 }}>
                           Como Inscribirse
                        </Typography>
                        <Timeline className="timeline">
                           <TimelineItem>
                              <TimelineSeparator>
                                 <TimelineDot />
                                 <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>Verificar la categoría a elegir</TimelineContent>
                           </TimelineItem>
                           <TimelineItem>
                              <TimelineSeparator>
                                 <TimelineDot />
                                 <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>Hacer el pago mediante BCP: <strong style={{ fontWeight: "bold" }}>380-05755648-0-47</strong> - CCI: <strong style={{ fontWeight: "bold" }}>00238010575564804742</strong></TimelineContent>
                           </TimelineItem>
                           <TimelineItem>
                              <TimelineSeparator>
                                 <TimelineDot />
                              </TimelineSeparator>
                              <TimelineContent>Completar el siguiente formulario: <a href="https://forms.gle/UbDzBXn51LwsuBM59" style={{ color: "red", textDecoration: "none", fontWeight: "bold" }}>Inscripción Cursos Pre-Congreso</a></TimelineContent>
                           </TimelineItem>
                        </Timeline>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', py: 2, fontWeight: 'bold', mb: 2 }}>
                           Beneficios
                        </Typography>
                        <Timeline className="timeline">
                           <TimelineItem>
                              <TimelineSeparator>
                                 <TimelineDot />
                                 <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>Certificado de participaciones</TimelineContent>
                           </TimelineItem>
                           <TimelineItem>
                              <TimelineSeparator>
                                 <TimelineDot />
                                 <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>Acceso al Curso Pre-Congreso</TimelineContent>
                           </TimelineItem>
                           <TimelineItem>
                              <TimelineSeparator>
                                 <TimelineDot />
                                 <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>Merchandising del Evento</TimelineContent>
                           </TimelineItem>
                           <TimelineItem>
                              <TimelineSeparator>
                                 <TimelineDot />
                              </TimelineSeparator>
                              <TimelineContent>Coffee Break ☕</TimelineContent>
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

export default PreCongress