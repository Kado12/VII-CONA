import React from "react";
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
   CardActionArea
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ListNav from "../components/ListNav";

/* ---------- HELPERS ---------- */
const createData = (category, inscription) => ({ category, inscription });

const rows = [
   createData('Profesionales', 'S/150.00'),
   createData('Estudiantes', 'S/80.00')
];

/* ---------- SUB-COMPONENTS ---------- */
const CourseCard = ({ date, children }) => (
   <Card sx={{ height: '100%' }}>
      <CardContent>
         <Typography variant="h6" align="center" fontWeight="bold" mb={1}>
            {date}
         </Typography>
         {children}
      </CardContent>
   </Card>
);

const TimeBlock = ({ time, label, children }) => (
   <>
      <Typography variant="subtitle1" fontWeight="bold" mt={2} mb={1}>
         {time}
      </Typography>
      <strong style={{ color: '#cfebe9ff', padding: '2px 6px', borderRadius: 8, backgroundColor: 'rgba(22,177,164,.7)' }}>{label}</strong>
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: '0.95rem' }}>
         {children}
      </ul>
   </>
);

const Speaker = ({ name, avatar, children }) => (
   <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Avatar src={avatar} sx={{ width: 64, height: 64 }} />
      <Box>
         <Typography variant="h6" fontWeight="bold">{name}</Typography>
         {children}
      </Box>
   </Grid>
);

/* ---------- MAIN COMPONENT ---------- */
const PreCongress = () => {
   return (
      <div>
         {/* Banner */}
         <Box component="section" sx={{ p: 2, bgcolor: '#56bfb6ff', textAlign: 'center', color: 'white', fontWeight: 'bold', border: 1, borderColor: '#a0bfff' }}>
            <Typography variant="body1" sx={{ textShadow: '0 0 5px #331' }}>
               Las pre-inscripciones están abiertas. ¡No te quedes sin tu lugar!
            </Typography>
         </Box>

         <Box component="section">
            <Grid container spacing={2}>
               {/* Sidebar */}
               <Grid size={{ xs: 12, sm: 4, md: 3 }} sx={{ transition: 'all .3s', p: 1 }}>
                  <ListNav />
               </Grid>

               {/* Content */}
               <Grid size={{ xs: 12, sm: 8, md: 9 }}>
                  <Box sx={{ p: 2 }}>
                     <Typography variant="h4" align="center" fontWeight="bold" mb={3}>
                        Cursos Pre-Congreso
                     </Typography>

                     {/* ===== CURSO 1 ===== */}
                     <Typography variant="h5" align="center" fontWeight="bold" mb={2} mt={4}>
                        Reducción de desastres relacionados con sedimentos con énfasis en huaycos
                     </Typography>
                     {/* Ponente 1 */}
                     <Typography variant="h6" fontWeight="bold" mb={1}>Ponente</Typography>
                     <Grid container spacing={2} mb={4}>
                        <Speaker name="Dr. Masato Kobiyama" avatar="DR_MASATO.jpeg">
                           <Typography variant="body2">Áreas: Hidrogeomorfología, Sociohidrología, Gestión del riesgo de desastres</Typography>
                           <Typography variant="body2">Formación: Lic. Ciencias (Kioto, 1985), M.Sc. Forestales (Tokio, 1991), Ph.D. Ing. Forestales (Paraná, Brasil, 1994)</Typography>
                        </Speaker>
                     </Grid>
                     <Grid container spacing={2} mb={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                           <CourseCard date="Lunes 03 de Noviembre">
                              <TimeBlock time="09:00 am - 01:00 pm" label="CLASE TEÓRICA">
                                 <li>Conceptos básicos de la reducción del riesgo de desastres</li>
                                 <li>Clasificación de movimientos de masas</li>
                                 <li>Mecanismo de generación de deslizamientos de tierra</li>
                                 <li>Mecanismo de generación de flujo de escombros</li>
                              </TimeBlock>

                              <TimeBlock time="03:00 pm - 05:00 pm" label="CLASE DE MODELAMIENTO">
                                 <li>SHALSTAB para simulación de deslizamientos de tierra superficiales</li>
                                 <li>MORPHO-2DH para simulación de flujo de escombros</li>
                                 <li>Gestión integrada de desastres relacionados con sedimentos</li>
                              </TimeBlock>
                           </CourseCard>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                           <CourseCard date="Martes 04 de Noviembre">
                              <TimeBlock time="09:00 am" label="PRIMERA SESIÓN">
                                 <li>Visita a campo</li>
                              </TimeBlock>
                              <TimeBlock time="05:00 pm" label="SEGUNDA SESIÓN">
                                 <li>Reunión con especialistas</li>
                              </TimeBlock>
                           </CourseCard>
                        </Grid>
                     </Grid>

                     <hr style={{ border: 'none', boxShadow: '0 0 10px 3px rgba(19, 100, 90, 1)' }} />

                     {/* ===== CURSO 2 ===== */}
                     <Typography variant="h5" align="center" fontWeight="bold" mb={2} mt={4}>
                        Hidráulica e Hidrología Computacional
                     </Typography>
                     {/* Ponente 2 */}
                     <Typography variant="h6" fontWeight="bold" mb={1}>Conferencista</Typography>
                     <Grid container spacing={2} mb={4}>
                        <Speaker name="Dr. Víctor Ponce" avatar="DR_PONCE.jpeg">
                           <Typography variant="body2">Áreas: Hidrología superficial/ambiental, Hidráulica computacional, Ingeniería de sedimentos, Ecohidrología, Sostenibilidad de aguas subterráneas, Cambio climático</Typography>
                           <Typography variant="body2">Profesor Emérito SDSU (2018), +2 800 publicaciones, 2 Doctorados Honoris Causa, Premio Nacional de Hidráulica Karl E. Hilgard (ASCE, 1979)</Typography>
                        </Speaker>
                     </Grid>
                     <Grid container spacing={2} mb={4}>
                        <Grid size={{ xs: 12 }}>
                           <CourseCard date="Martes 04 de Noviembre">
                              <TimeBlock time="08:30 am - 12:00 pm" label="CLASE TEÓRICO-PRÁCTICA">
                                 <li>La curva S explicada</li>
                                 <li>El método Muskingum-Cunge</li>
                                 <li>Difusión de la escorrentía re-examinada</li>
                                 <li>Flujo no permanente con HEC-RAS</li>
                                 <li>Cálculos en línea (inglés):
                                    <ul>
                                       <li>Tirantes normal y crítico en canal prismático</li>
                                       <li>Tirante normal en una cuenca triangular</li>
                                       <li>Descarga en una alcantarilla circular</li>
                                       <li>Curva de gasto en un canal prismático</li>
                                       <li>Caudales de avenida: Gumbel y Log-Pearson III</li>
                                    </ul>
                                 </li>
                              </TimeBlock>
                           </CourseCard>
                        </Grid>
                     </Grid>

                     <hr style={{ border: 'none', boxShadow: '0 0 10px 3px rgba(19, 100, 90, 1)' }} />

                     {/* ===== CURSO 3 ===== */}
                     <Typography variant="h5" align="center" fontWeight="bold" mb={2} mt={4}>
                        Herramientas para el diseño de componentes de un aliviadero
                     </Typography>
                     {/* Ponente 3 */}
                     <Typography variant="h6" fontWeight="bold" mb={1}>Conferencista</Typography>
                     <Grid container spacing={2} mb={4}>
                        <Speaker name="Dr. Rafael Pardo" avatar="DR_PARDO.jpeg">
                           <Typography variant="body2">Posdoctorado UNICAMP (Brasil), Ph.D. & M.Sc. CUJAE (Cuba), Ing. Hidráulico Universidad de La Habana</Typography>
                           <Typography variant="body2">19 artículos indexados, 5 libros, 3 monografías, 3 manuales, 25 eventos internacionales</Typography>
                        </Speaker>
                     </Grid>
                     <Grid container spacing={2} mb={4}>
                        <Grid size={{ xs: 12 }} margin="auto">
                           <CourseCard date="Martes 04 de Noviembre">
                              <TimeBlock time="09:00 am - 01:00 pm" label="PRIMERA SESIÓN">
                                 <li>Conducto de descarga (rápida) con fuertes pendientes</li>
                                 <li>Ejemplos</li>
                              </TimeBlock>

                              <TimeBlock label="SEGUNDA SESIÓN">
                                 <li>Disipadores de energía: Trampolín o salto en esquí, estanque y pozo amortiguador</li>
                                 <li>Ejemplos</li>
                              </TimeBlock>

                              <TimeBlock time="03:00 pm - 07:00 pm" label="TERCERA SESIÓN">
                                 <li>Obras de toma: Régimen libre, Régimen forzado</li>
                                 <li>Ejemplos</li>
                              </TimeBlock>
                           </CourseCard>
                        </Grid>
                     </Grid>


                     {/* ===== INSCRIPCIONES / BENEFICIOS ===== */}
                     <Typography variant="h5" align="center" fontWeight="bold" my={3}>
                        Inscripciones
                     </Typography>
                     <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                           <TableHead sx={{ bgcolor: 'rgb(98,98,132)' }}>
                              <TableRow>
                                 <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Categoría</TableCell>
                                 <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Inversión</TableCell>
                              </TableRow>
                           </TableHead>
                           <TableBody>
                              {rows.map(r => (
                                 <TableRow key={r.category}>
                                    <TableCell>{r.category}</TableCell>
                                    <TableCell align="center">{r.inscription}</TableCell>
                                 </TableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </TableContainer>

                     <Typography variant="h5" align="center" fontWeight="bold" my={3}>
                        Cómo inscribirse
                     </Typography>
                     <Timeline className="timeline">
                        <TimelineItem>
                           <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
                           <TimelineContent>Verifica la categoría que te corresponde</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                           <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
                           <TimelineContent>
                              Realiza el depósito o transferencia:<br />
                              <strong>BCP: 380-05755648-0-47</strong><br />
                              <strong>CCI: 00238010575564804742</strong>
                           </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                           <TimelineSeparator><TimelineDot /></TimelineSeparator>
                           <TimelineContent>
                              Completa el formulario:&nbsp;
                              <a href="https://forms.gle/UbDzBXn51LwsuBM59" target="_blank" rel="noreferrer" style={{ color: 'crimson', fontWeight: 'bold' }}>
                                 Inscripción Cursos Pre-Congreso
                              </a>
                           </TimelineContent>
                        </TimelineItem>
                     </Timeline>

                     <Typography variant="h5" align="center" fontWeight="bold" my={3}>
                        Beneficios
                     </Typography>
                     <Timeline className="timeline">
                        <TimelineItem><TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator><TimelineContent>Certificado de participación</TimelineContent></TimelineItem>
                        <TimelineItem><TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator><TimelineContent>Acceso al curso elegido</TimelineContent></TimelineItem>
                        <TimelineItem><TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator><TimelineContent>Merchandising del evento</TimelineContent></TimelineItem>
                        <TimelineItem><TimelineSeparator><TimelineDot /></TimelineSeparator><TimelineContent>Coffee break ☕</TimelineContent></TimelineItem>
                     </Timeline>

                  </Box>
               </Grid>
            </Grid>
         </Box>
      </div>
   );
};

export default PreCongress;