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

const createData = (autor, co_autor, presentation, code, entity) => {
   return { autor, co_autor, presentation, code, entity }
}

const thematic_axe_1 = [
   createData('Cabrera Cabrera Juan Walter', '-', 'Método de area pendiente modificado para la estimación de caudales en ríos de Lecho Pedregoso de la Costa Peruana', 'T1-01', 'UNI - LIMA'),
   createData('Castillo Navarro, Leonardo', 'Diego Cornejo, Diego Montenegro, Mark Santiago, Marco Yauri, Joel Atencio Oliva.', 'Simulación de flujos de lodos en un canal de laboratorio – Quebrada Malanche, Punta Hermosa ', 'T1-02', 'UNI - LIMA'),
   createData('Chambilla Chipana Maria Lourdes', '-', 'Ecosistemas rurales en transición: Implicancias hídricas y paisajísticas en Miculla – Tacna', 'T1-03', 'U.N. DE MOQUEGUA'),
   createData('Chávarri Velarde Eduardo Abraham', 'Pino Vargas Edwin, Ingol-Blanco Eusebio, Mejía Fabricio, Cruz Ana, Vera Alissa', 'Impactos del cambio climatico y la variabilidad en la precipitacion y los caudales maximos en la Quebrada del Diablo, Tacna, Peru', 'T1-04', 'UNALM - LIMA'),
   createData('Cruz Rodriguez Carolina Elizabeth', 'Pino Vargas Edwin, Huayna Germán,  Avendaño Jihuallanga César ', 'El estrés hídrico del cultivo del olivo en la cabecera del desierto Atacama: Un enfoque basado en Teledetección e Inteligencia Artificial', 'T1-05', 'UNJBG - TACNA'),
   createData('Mamani Larico Albert Johan', 'Huisa Maquera Syntia, Oscco Ciprian Laura, Boza Espinoza Ericka, Bonnesoeur Vivien', 'Integración de procesos ecohidrológicos de ecosistemas semiáridos de montaña para la gestión de intervenciones de Interés Hídrico', 'T1-06', 'INAIGEN - ANA'),
   createData('Pino Vargas Edwin Martin', 'Germán Huayna, Víctor Pocco, Pablo Franco-León, Fredy Cabrera-Olivera, César Avendaño-Jihuallanga', 'Dinámica De La Cobertura Terrestre Y Predicciones Proyectadas Cabecera Desierto De Atacama: Un Enfoque Basado En Teledetección E Inteligencia Artificial', 'T1-07', 'UNJBG - TACNA')
];

const thematic_axe_2 = [
   createData('Alarcon Ataucusi David Jorge', 'Llactahuaman Huaman Cesar', 'Implementación del Modelo hidrológico distribuido Tetis en la Cuenca del Río Cachi, Ayacucho', 'T2-01', 'UNSCH - AYACUCHO'),
   createData('Atúncar Zevallos Gustavo Adolfo', '-', 'Aplicación de inteligencia artificial en la simulación de escorrentía: Un análisis comparativo entre red neuronal LSTM y el Modelo Hidrológico SWAT', 'T2-02', 'UNALM - LIMA'),
   createData('Carpio Ancalle Eduardo Jesus', ' Rau Pedro, Jara Mitchel', 'Comparación de Modelos Hidrológicos Conceptuales para la infraestructura natural basada en bofedales en la cuenca alta del río Vilcanota', 'T2-03', 'UTEC'),
   createData('Esteban Yauyo Richard Smith', 'Tafur Gutierrez Leoncio,    Rozas Olivera Guido, Sarango Julca Duglas', 'Determinación de cotas de Inundación extrémales en La Punta – Callao mediante Modelación numérica en Python', 'T2-04', 'UNMSM'),
   createData('Flores Riveros Jose A.', 'Flores Galindo Fredy, Noa Yarasca Efrain ', 'Evaluación de variables predictoras e incertidumbre en la estimación de la evapotranspiración mediante redes neuronales', 'T2-05', 'UNSCH - AYACUCHO'),
   createData('Huanay Pérez Joseph Ruben Francisco', 'Kuroiwa Zeballos Julio M. ', 'Calibración de Hidrogramas Unitarios Sintéticos para estimar caudales de avenida en cuencas de la zona altoandina del departamento de Huánuco', 'T2-06', 'UNI - LIMA'),
   createData('Huayna Felipe German', 'Cabrera Olivera Fredy, Pino Vargas Edwin', 'Dinámica y proyecciones de Ecosistemas de Alta Montaña en entornos aridos y su incidencia en el acuífero Caplina: Análisis con CA-Markov en la Cordillera del Barroso, Tacna, Perú', 'T2-07', 'UNJBG - TACNA'),
   createData('Luna Visitación Hana Paich', 'Pachac Huerta Yenica', 'Modelamiento hidrológico para identificar areas de riesgo en la Subcuenca Quillcay, Sector Nueva Florida, Distrito Independencia 2024', 'T2-08', 'UNASAM - HUARAZ'),
   createData('Paucar Hilario Carlos Efrain', '-', 'Aspectos ingenieriles en la agresividad térmica en el Centro Poblado Santa Bárbara – Huancavelica', 'T2-09', 'UNI - LIMA'),
   createData('Pino Vargas Edwin Martin', 'Huayna German, Pocco Victor, Espinoza Molina Jorge, Cabrera Olivera Fredy, Acosta Caipa Karina', 'Determinación De Zonas Vulnerables A Inundaciones Repentinas Usando Técnicas De Inteligencia Artificial En Regiones Áridas, Norte Del Desierto De Atacama', 'T2-10', 'UNJBG - TACNA'),
   createData('Tafur Gutierrez Enrique Leoncio', 'Rozas Olivera Guido Américo, Sarango Julca Duglas Donal', 'Comparación entre un Modelo Numérico y Físico en el Estudio del oleaje en La Costa Verde – Región Callao', 'T2-11', 'UNMSM')
]

const thematic_axe_3 = [
   createData('Alcantara Sandra', 'Escobedo López  Samantha, Rau Pedro, Yauca Harold', 'Influencia del Fenómeno El Niño y la Antropización en caudales de las Cuencas Piura y Zaña. Un Enfoque de Pronóstico', 'T3-01', 'UTEC'),
   createData('Chavez Ayala Luis Angel', 'Roger Hidalgo', 'Cunetas Verdes Como Alternativa Sostenible: Análisis Comparativo Mediante La Modelación Física', 'T3-02', 'UNI - LIMA'),
   createData('Gastelu Silvera Joseph Frankchesco', 'Condori Hinostroza Joel ', 'Teledetección de Clorofila-A en ecosistemas acuáticos altoandinos: Análisis de Series Temporales 2017-2025', 'T3-03', 'UNALM - LIMA'),
   createData('Gil Mora Juan Eduardo', 'Álvaro Horacio Flores Boza', 'Determinación del Índice de Calidad del Agua de dos ríos urbanos en la ciudad Ddl Cusco: Saphy Y Cachimayu', 'T3-04', 'UNIVERSIDAD ANDINA - CUZCO'),
   createData('Guevara Bendezu Jose', '-', 'Gestión Integrada del recurso hídrico del Rio Ica almacenando excedentes anuales. Evaluación Prospectiva al 2030', 'T3-05', 'U. N. SAN LUIS GONZAGA - ICA'),
   createData('Huanuqueño Murillo Jose Luis', 'Quispe Tito David, Ramos Fernández Lia', 'Monitoreo multitemporal del estrés hídrico en arrozales de la región Lambayeque mediante imágenes satelitales calibradas mediante Drones con cámaras térmicas', 'T3-06', 'UNALM - LIMA'),
   createData('Meseth Macchiavello Enrique', '-', 'Gestión de recursos hídricos y agricultura en Vilcabamba, Cusco, desde los Incas hasta la actualidad', 'T3-07', 'INIA - DIDET'),
   createData('Paucar Hilario Carlos Efrain', '-', 'Microclima vertical en la Escuela de Ingeniería Civil de la Universidad Nacional de Huancavelica: Estabilidad térmica y riesgos urbanos', 'T3-08', 'UNI - LIMA'),
   createData('Rendón Schneir Eric', '-', 'Análisis del enfoque económico en la Gestión Hídrica en el Perú: Antecedentes Y Perspectivas', 'T3-09', 'UNMSM - LIMA'),
   createData('Rosas Barturén Miluska A.', 'Varillas Salazar Giannina, Peralta Solórzano Angela, Moya Luis', 'Transformación del territorio fluvial por asentamientos informales: Riesgos emergentes para la infraestructura urbana', 'T3-10', 'PUCP - LIMA'),
   createData('Sánchez Astello Ma. Magdalena', '-', 'Determinación del tiempo de ejecución de un Proyecto a través del Diagrama de Redes y de la Ruta Crítica: Estudio De Caso', 'T3-11', 'UNIVERSIDAD CHAPINGO MEXICO')
]

const thematic_axe_4 = [
   createData('Aldana Vásquez Eduardo Jesus', 'Saldaña Quisca Marcelo, Quisca Astocahuana Samuel Ismael.', 'Modelamiento BIM del Diseño y La Planificación de la construcción de la Presa CFRD, Ninahuisa', 'T4-01', 'UNMSM - LIMA'),
   createData('Arancibia Ada', 'Arone V. Jamil, Huatuco Mitsue', 'Avances en la investigación de los Techos Verdes como SUDS', 'T4-02', 'UNI - LIMA'),
   createData('Arbaiza Ocrospoma Hulinho Yordy', 'Quisca Astocahuana Samuel Ismael', 'Análisis multicriterio mediante sistema de información geográfica para la selección del sitio y tipo de presa optimo en la cuenca del  rio Lurín', 'T4-03', 'UNMSM - LIMA'),
   createData('Ayala Bizarro Ivan Arturo', 'Gutierrez Ronald R.', 'Análisis comparativo del Runout en Flujos No Newtonianos sobre Canales escalonados mediante experimentación física y modelación CFD', 'T4-04', 'UNI - LIMA'),
   createData('Cayllahua Herrera Edgar', 'Cano Valencia Alejandro', 'Impacto de un depósito de detención de lluvias en la capacidad hidráulica de una red de drenaje pluvial en Arequipa', 'T4-05', 'UCSP - AREQUIPA'),
   createData('Cántaro Fabián Gideael Quislon', ' Quisca Samuel ', 'Diseño hidráulico optimizado de Aliviaderos escalonados convergente en Presas RCC, Mediante Modelación 3D', 'T4-06', 'UNMSM - LIMA'),
   createData('Hidalgo Roger', 'Alvarez Dayanna,Briceño Fernando', 'Percepcion social y evaluacion climatica de la niebla para proyectos de captacion de agua en el A.H. CIUDAD DE GOSEN', 'T4-07', 'UNI - LIMA'),
   createData('Mallqui Durand Jhon Deyver Max', 'Guerrero Leo, Kory,  Horna Daniel, Rau Pedro', 'Modelación Hidrodinámica para el transporte de mercurio asociado a pulsos de sedimentos en el río Madre De Dios', 'T4-08', 'UTEC - LIMA'),
   createData('Paliza Magallanes Yeremi Victor', 'Pinto Flores Percy Matiu', 'Análisis de niveles de peligro por inundaciones pluviales en la Quebrada Sahuanay, distrito de Abancay, departamento de Apurímac – 2025', 'T4-09', 'UNI - LIMA'),
   createData('Parvina Chacaltana William Eduardo', 'Benito Rojas Hugo Miguel', 'Uso del Número de Vedernikov en el Diseño de Canales de Alta Pendiente', 'T4-10', 'U. N. SAN LUIS GONZAGA - ICA'),
   createData('Paucar y Montenegro Clifton', '-', 'Integración de RUSLE/SDR Con SIG para evaluar erosión y rendimiento de sedimentos en laderas andinas en proceso de urbanización', 'T4-11', 'UNI - LIMA'),
   createData('Ponce Victor Miguel', '-', 'La Onda Cinemática Desmitificada', 'T4-12', 'UNIVERSIDAD DE SAN DIEGO - CALIFORNIA / EE.UU.'),
   createData('Ponce Victor Miguel', '-', 'Ondas Cinemático-Dinámicas Mixtas Desbancadas', 'T4-13', 'UNIVERSIDAD DE SAN DIEGO - CALIFORNIA / EE.UU.'),
   createData('Rivera Huaman Johan Antonio', 'Ambrosio Camayo Erick Julián, Saldaña Quisca Marcelo', 'Modelamiento BIM en la Planificación de la construcción de la Presa de concreto a gravedad Quisco', 'T4-14', 'UNMSM - LIMA'),
   createData('Saldaña Quisca Marcelo', 'Quisca Astocahuana Samuel Ismael ', 'Evaluación de la seguridad física y funcional de La Presa Tinajones mediante análisis 3D de Filtración y de Esfuerzo-Deformación', 'T4-15', 'UNALM - LIMA'),
   createData('Sánchez Astello Ma. Magdalena', '-', 'Administración de obras de infraestructura Hidroagrícola mediante la aplicación de CPM y Diagramas de Gantt: Un Estudio De Caso', 'T4-16', 'UNIVERSIDAD CHAPINGO MEXICO'),
   createData('Sánchez Gamarra Kory Celeste', 'Rosas Miluska A.', 'Modelamiento numérico para el Diseño de coberturas de la relavera Mesapata considerando los efectos del cambio climático', 'T4-17', 'PUCP'),
   createData('Sanchez Santiago', 'Murga Paniagua Sebastian, Sanchez Carlos', 'Evaluación comparativa de Modelos analíticos, físicos y numéricos para el Diseño de disipadores de energía Tipo USBR II', 'T4-18', 'UNMSM - LIMA'),
   createData('Ventura Rosas Harold Hans', 'Rivera Leslie, Castilla Chanco Erick,  Cántaro Gideael, Quisca Samuel', 'Evaluación de la capacidad hidráulica del Aliviadero de la Presa Gallito Ciego bajo escenario de cambio climático utilizando la Ecuación De Fokker-Planck-Kolmogorov y Modelación 3D', 'T4-19', 'UNMSM - LIMA'),
   createData('Huisa Maikol J.', 'Cabello Francis G, Jara Mitchel J.', 'Dinamica torrencial y Obras en la Quebrada Agoragra: Desafios para la Gestion de Riesgos', 'T4 - 20', 'MJ&ASOCIADOS'),
   createData('De la Cruz Araujo Ronald', '-', 'Impacto del fondo del canal en la propagacion de solitones hidrodinamicos: implicancias para las estructuras hidraulicas, la conservacion de paisajes costeros y el control de inundaciones', 'T4 - 21', 'U. N. AUTONOMA DE TAYACAJA')
]

const thematic_axe_5 = [
   createData('Injante Lima Emilio Domingo', '-', 'Preservación de Reserva de Huarangos (Prosopis Limensis) en el Valle de Ica: Una estrategia de reforestación con Reúso de Aguas Residuales Domésticas', 'T5-01', 'U. N. SAN LUIS GONZAGA - ICA'),
   createData('Jamanca Espinoza Eriksson Joseph', 'Romero Rolando.', 'Comparativa técnico-económica de soluciones rígidas y flexibles en quebradas Activas: Lecciones para la gestión sostenible del agua y sedimentos', 'T5-02', 'GEOBRUGG'),
   createData('Navarro Guzmán Marco Alberto', 'Pino Vargas Edwin ', 'Variabilidad Espacial de ecosistemas reguladores de agua al sur del Perú: Clima o actividad humana', 'T5-03', 'UNALM - LIMA'),
   createData('Rau Pedro', 'Marcone Giancarlo,  Alcántara Samantha', 'Una aproximación a la reconstrucción hidrológica y revalorización histórica del Rio Zaña en los ultimos 500 años', 'T5-04', 'UTEC - LIMA'),
   createData('Vargas Huanca Wilder', 'Berbel Julio, Del Águila Sandra, Díaz Cano Esther', 'Valoración económica de sistemas ancestrales de recarga artificial de acuíferos en entornos de Alta Montaña de Sierra Nevada, España', 'T5-05', 'UNALM - LIMA')
]

const ScheduledPresentation = () => {


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
                           RELACION DE PONENCIAS APROBADA Y PROGRAMADAS PARA EXPOSICION EN EL VII CONA 2025, ICA-PERU
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                           EJE TEMÁTICO 1
                        </Typography>
                        <TableContainer component={Paper}>
                           <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                                 <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>AUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>COAUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>PONENCIA</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>CODIGO</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>ENTIDAD</TableCell>
                                 </TableRow>
                              </TableHead>
                              <TableBody>
                                 {thematic_axe_1.map((row) => (
                                    <TableRow
                                       key={row.autor}
                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                       <TableCell component="th" scope="row">
                                          {row.autor}
                                       </TableCell>
                                       <TableCell align="start">{row.co_autor}</TableCell>
                                       <TableCell align="start">{row.presentation}</TableCell>
                                       <TableCell align="center">{row.code}</TableCell>
                                       <TableCell align="start">{row.entity}</TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        </TableContainer>
                        <hr style={{ border: '1px solid #2d3a3dca', margin: '20px 0', boxShadow: '0px 0px 10px 2px #153c3cff' }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                           EJE TEMÁTICO 2
                        </Typography>
                        <TableContainer component={Paper}>
                           <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                                 <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>AUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>COAUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>PONENCIA</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>CODIGO</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>ENTIDAD</TableCell>
                                 </TableRow>
                              </TableHead>
                              <TableBody>
                                 {thematic_axe_2.map((row) => (
                                    <TableRow
                                       key={row.autor}
                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                       <TableCell component="th" scope="row">
                                          {row.autor}
                                       </TableCell>
                                       <TableCell align="start">{row.co_autor}</TableCell>
                                       <TableCell align="start">{row.presentation}</TableCell>
                                       <TableCell align="center">{row.code}</TableCell>
                                       <TableCell align="start">{row.entity}</TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        </TableContainer>
                        <hr style={{ border: '1px solid #2d3a3dca', margin: '20px 0', boxShadow: '0px 0px 10px 2px #153c3cff' }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                           EJE TEMÁTICO 3
                        </Typography>
                        <TableContainer component={Paper}>
                           <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                                 <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>AUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>COAUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>PONENCIA</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>CODIGO</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>ENTIDAD</TableCell>
                                 </TableRow>
                              </TableHead>
                              <TableBody>
                                 {thematic_axe_3.map((row) => (
                                    <TableRow
                                       key={row.autor}
                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                       <TableCell component="th" scope="row">
                                          {row.autor}
                                       </TableCell>
                                       <TableCell align="start">{row.co_autor}</TableCell>
                                       <TableCell align="start">{row.presentation}</TableCell>
                                       <TableCell align="center">{row.code}</TableCell>
                                       <TableCell align="start">{row.entity}</TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        </TableContainer>
                        <hr style={{ border: '1px solid #2d3a3dca', margin: '20px 0', boxShadow: '0px 0px 10px 2px #153c3cff' }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                           EJE TEMÁTICO 4
                        </Typography>
                        <TableContainer component={Paper}>
                           <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                                 <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>AUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>COAUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>PONENCIA</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>CODIGO</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>ENTIDAD</TableCell>
                                 </TableRow>
                              </TableHead>
                              <TableBody>
                                 {thematic_axe_4.map((row) => (
                                    <TableRow
                                       key={row.autor}
                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                       <TableCell component="th" scope="row">
                                          {row.autor}
                                       </TableCell>
                                       <TableCell align="start">{row.co_autor}</TableCell>
                                       <TableCell align="start">{row.presentation}</TableCell>
                                       <TableCell align="center">{row.code}</TableCell>
                                       <TableCell align="start">{row.entity}</TableCell>
                                    </TableRow>
                                 ))}
                              </TableBody>
                           </Table>
                        </TableContainer>
                        <hr style={{ border: '1px solid #2d3a3dca', margin: '20px 0', boxShadow: '0px 0px 10px 2px #153c3cff' }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                           EJE TEMÁTICO 5
                        </Typography>
                        <TableContainer component={Paper}>
                           <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                                 <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>AUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>COAUTOR</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>PONENCIA</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>CODIGO</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>ENTIDAD</TableCell>
                                 </TableRow>
                              </TableHead>
                              <TableBody>
                                 {thematic_axe_5.map((row) => (
                                    <TableRow
                                       key={row.autor}
                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                       <TableCell component="th" scope="row">
                                          {row.autor}
                                       </TableCell>
                                       <TableCell align="start">{row.co_autor}</TableCell>
                                       <TableCell align="start">{row.presentation}</TableCell>
                                       <TableCell align="center">{row.code}</TableCell>
                                       <TableCell align="start">{row.entity}</TableCell>
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

export default ScheduledPresentation