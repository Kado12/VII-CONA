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

const createData = (autor, coautor, summary) => {
  return { autor, coautor, summary }
}

const rows = [
  createData('Alarcon Ataucusi David Jorge', 'Llactahuaman Huaman Cesar', 'Implementación del Modelo hidrológico distribuido Tetis en la Cuenca del Río Cachi, Ayacucho'),
  createData('Alcantara Sandra', 'Escobedo López  Samantha, Rau Pedro, Yauca Harold', 'Influencia del Fenómeno El Niño y la Antropización en caudales de las Cuencas Piura y Zaña. Un Enfoque de Pronóstico'),
  createData('Aldana Vásquez Eduardo Jesus', 'Saldaña Quisca Marcelo, Quisca Astocahuana Samuel Ismael.', 'Modelamiento BIM del Diseño y La Planificación de la construcción de la Presa CFRD, Ninahuisa'),
  createData('Arancibia Ada', 'Arone V. Jamil, Huatuco Mitsue', 'Avances en la investigación de los Techos Verdes como SUDS'),
  createData('Arbaiza Ocrospoma Hulinho Yordy', 'Quisca Astocahuana Samuel Ismael', 'Análisis multicriterio mediante sistema de información geográfica para la selección del sitio y tipo de presa optimo en la cuenca del  rio Lurín'),
  createData('Atúncar Zevallos Gustavo Adolfo', '-', 'Aplicación de inteligencia artificial en la simulación de escorrentía: Un análisis comparativo entre red neuronal LSTM y el Modelo Hidrológico SWAT'),
  createData('Ayala Bizarro Ivan Arturo', 'Gutierrez Ronald R.', 'Análisis comparativo del Runout en Flujos No Newtonianos sobre Canales escalonados mediante experimentación física y modelación CFD'),
  createData('Cabrera Cabrera Juan Walter', '-', 'Método de area pendiente modificado para la estimación de caudales en ríos de Lecho Pedregoso de la Costa Peruana'),
  createData('Cayllahua Herrera Edgar', 'Cano Valencia Alejandro', 'Impacto de un depósito de detención de lluvias en la capacidad hidráulica de una red de drenaje pluvial en Arequipa'),
  createData('Cántaro Fabián Gideael Quislon', 'Quisca Samuel', 'Diseño hidráulico optimizado de Aliviaderos escalonados convergente en Presas RCC, Mediante Modelación 3D'),
  createData('Carpio Ancalle Eduardo Jesus', 'Rau Pedro, Jara Mitchel', 'Comparación de Modelos Hidrológicos Conceptuales para la infraestructura natural basada en bofedales en la cuenca alta del río Vilcanota'),
  createData('Castillo Navarro, Leonardo', 'Diego Cornejo, Diego Montenegro, Mark Santiago, Marco Yauri, Joel Atencio Oliva.', 'Simulación de flujos de lodos en un canal de laboratorio – Quebrada Malanche, Punta Hermosa '),
  createData('Chambilla Chipana Maria Lourdes', '-', 'Ecosistemas rurales en transición: Implicancias hídricas y paisajísticas en Miculla – Tacna'),
  createData('Chávarri Velarde Eduardo Abraham', 'Pino Vargas Edwin, Ingol-Blanco Eusebio, Mejía Fabricio, Cruz Ana, Vera Alissa', 'Impactos del cambio climatico y la variabilidad en la precipitacion y los caudales maximos en la Quebrada del Diablo, Tacna, Peru'),
  createData('Chavez Ayala Luis Angel', 'Roger Hidalgo', 'Cunetas Verdes Como Alternativa Sostenible: Análisis Comparativo Mediante La Modelación Física'),
  createData('Cruz Rodriguez Carolina Elizabeth', 'Pino Vargas Edwin, Huayna Germán,  Avendaño Jihuallanga César ', 'El estrés hídrico del cultivo del olivo en la cabecera del desierto Atacama: Un enfoque basado en Teledetección e Inteligencia Artificial'),
  createData('De la Cruz Araujo Ronald', '-', 'Impacto del fondo del canal en la propagacion de solitones hidrodinamicos - Implicancias para las estructuras hidraulicas, la conservacion de paisajes costeros y el control de inundaciones.'),
  createData('Esteban Yauyo Richard Smith', 'Tafur Gutierrez Leoncio, Rozas Olivera Guido, Sarango Julca Duglas', 'Determinación de cotas de Inundación extrémales en La Punta – Callao mediante Modelación numérica en Python'),
  createData('Flores Riveros Jose A.', 'Flores Galindo Fredy, Noa Yarasca Efrain ', 'Evaluación de variables predictoras e incertidumbre en la estimación de la evapotranspiración mediante redes neuronales'),
  createData('Gastelu Silvera Joseph Frankchesco', 'Condori Hinostroza Joel ', 'Teledetección de Clorofila-A en ecosistemas acuáticos altoandinos: Análisis de Series Temporales 2017-2025'),
  createData('Gil Mora Juan Eduardo', 'Álvaro Horacio Flores Boza', 'Determinación del Índice de Calidad del Agua de dos ríos urbanos en la ciudad Ddl Cusco: Saphy Y Cachimayu'),
  createData('Guevara Bendezu Jose', '-', 'Gestión Integrada del recurso hídrico del Rio Ica almacenando excedentes anuales. Evaluación Prospectiva al 2030'),
  createData('Huanay Pérez Joseph Ruben Francisco', 'Kuroiwa Zeballos Julio M. ', 'Calibración de Hidrogramas Unitarios Sintéticos para estimar caudales de avenida en cuencas de la zona altoandina del departamento de Huánuco'),
  createData('Hidalgo Roger', 'Alvarez Dayanna,Briceño Fernando', 'Percepcion social y evaluacion climatica de la niebla para proyectos de captacion de agua en el A.H. CIUDAD DE GOSEN'),
  createData('Huanuqueño Murillo Jose Luis', 'Quispe Tito David, Ramos Fernández Lia', 'Monitoreo multitemporal del estrés hídrico en arrozales de la región Lambayeque mediante imágenes satelitales calibradas mediante Drones con cámaras térmicas'),
  createData('Huisa Maikol J.', 'Cabello Francis G, Jara Mitchel J.', 'Dinamica torrencial y Obras en la Quebrada Agoragra: Desafios para la Gestion de Riesgos'),
  createData('Huayna Felipe German', 'Cabrera Olivera Fredy, Pino Vargas Edwin', 'Dinámica y proyecciones de Ecosistemas de Alta Montaña en entornos aridos y su incidencia en el acuífero Caplina: Análisis con CA-Markov en la Cordillera del Barroso, Tacna, Perú'),
  createData('Injante Lima Emilio Domingo', '', 'Preservación de Reserva de Huarangos (Prosopis Limensis) en el Valle de Ica: Una estrategia de reforestación con Reúso de Aguas Residuales Domésticas'),
  createData('Jamanca Espinoza Eriksson Joseph', 'Romero Rolando.', 'Comparativa técnico-económica de soluciones rígidas y flexibles en quebradas Activas: Lecciones para la gestión sostenible del agua y sedimentos'),
  createData('Luna Visitación Hana Paich', 'Pachac Huerta Yenica', 'Modelamiento hidrológico para identificar areas de riesgo en la Subcuenca Quillcay, Sector Nueva Florida, Distrito Independencia 2024'),
  createData('Mallqui Durand Jhon Deyver Max', 'Guerrero Leo, Kory Konsoer Kory, Daniel Horna Daniel, Rau Pedro', 'Modelación Hidrodinámica para el transporte de mercurio asociado a pulsos de sedimentos en el río Madre De Dios'),
  createData('Mamani Larico Albert Johan', 'Huisa Maquera Syntia, Oscco Ciprian Laura, Boza Espinoza Ericka, Bonnesoeur Vivien', 'Integración de procesos ecohidrológicos de ecosistemas semiáridos de montaña para la gestión de intervenciones de Interés Hídrico'),
  createData('Meseth Macchiavello Enrique', '-', 'Gestión de recursos hídricos y agricultura en Vilcabamba, Cusco, desde los Incas hasta la actualidad'),
  createData('Navarro Guzmán Marco Alberto', 'Pino Vargas Edwin ', 'Variabilidad Espacial de ecosistemas reguladores de agua al sur del Perú: Clima o actividad humana'),
  createData('Paliza Magallanes Yeremi Victor', 'Pinto Flores Percy Matiu', 'Análisis de niveles de peligro por inundaciones pluviales en la Quebrada Sahuanay, distrito de Abancay, departamento de Apurímac – 2025'),
  createData('Parvina Chacaltana William Eduardo', 'Benito Rojas Hugo Miguel', 'Uso del Número de Vedernikov en el Diseño de Canales de Alta Pendiente'),
  createData('Paucar Hilario Carlos Efrain', '-', 'Aspectos ingenieriles en la agresividad térmica en el Centro Poblado Santa Bárbara – Huancavelica'),
  createData('Paucar Hilario Carlos Efrain', '-', 'Microclima vertical en la Escuela de Ingeniería Civil de la Universidad Nacional de Huancavelica: Estabilidad térmica y riesgos urbanos'),
  createData('Paucar y Montenegro Clifton', '-', 'Integración de RUSLE/SDR Con SIG para evaluar erosión y rendimiento de sedimentos en laderas andinas en proceso de urbanización'),
  createData('Pino Vargas Edwin Martin', 'Huayna German, Pocco Victor, Espinoza Molina Jorge, Cabrera Olivera Fredy, Acosta Caipa Karina', 'Determinación De Zonas Vulnerables A Inundaciones Repentinas Usando Técnicas De Inteligencia Artificial En Regiones Áridas, Norte Del Desierto De Atacama'),
  createData('Pino Vargas Edwin Martin', 'Germán Huayna, Víctor Pocco, Pablo Franco-León, Fredy Cabrera-Olivera, César Avendaño-Jihuallanga', 'Dinámica De La Cobertura Terrestre Y Predicciones Proyectadas Cabecera Desierto De Atacama: Un Enfoque Basado En Teledetección E Inteligencia Artificial'),
  createData('Ponce Victor Miguel', '-', 'La Onda Cinemática Desmitificada'),
  createData('Ponce Victor Miguel', '-', 'Ondas Cinemático-Dinámicas Mixtas Desbancadas'),
  createData('Rau Pedro', 'Marcone Giancarlo,  Alcántara Samantha', 'Una aproximación a la reconstrucción hidrológica y revalorización histórica del Rio Zaña en los ultimos 500 años'),
  createData('Rendón Schneir Eric', '-', 'Análisis del enfoque económico en la Gestión Hídrica en el Perú: Antecedentes Y Perspectivas'),
  createData('Rivera Huaman Johan Antonio', 'Ambrosio Camayo Erick Julián, Saldaña Quisca Marcelo', 'Modelamiento BIM en la Planificación de la construcción de la Presa de concreto a gravedad Quisco'),
  createData('Rosas Barturén Miluska A.', 'Varillas Salazar Giannina, Peralta Solórzano Angela, Moya Luis', 'Transformación del territorio fluvial por asentamientos informales: Riesgos emergentes para la infraestructura urbana'),
  createData('Saldaña Quisca Marcelo', 'Quisca Astocahuana Samuel Ismael ', 'Evaluación de la seguridad física y funcional de La Presa Tinajones mediante análisis 3D de Filtración y de Esfuerzo-Deformación'),
  createData('Sánchez Astello Ma. Magdalena', '-', 'Determinación del tiempo de ejecución de un Proyecto a través del Diagrama de Redes y de la Ruta Crítica: Estudio De Caso'),
  createData('Sánchez Astello Ma. Magdalena', '-', 'Administración de obras de infraestructura Hidroagrícola mediante la aplicación de CPM y Diagramas de Gantt: Un Estudio De Caso'),
  createData('Sánchez Gamarra Kory Celeste', 'Rosas Miluska A.', 'Modelamiento numérico para el Diseño de coberturas de la relavera Mesapata considerando los efectos del cambio climático'),
  createData('Sanchez Santiago', 'Murga Paniagua Sebastian, Sanchez Carlos', 'Evaluación comparativa de Modelos analíticos, físicos y numéricos para el Diseño de disipadores de energía Tipo USBR II'),
  createData('Tafur Gutierrez Enrique Leoncio', 'Rozas Olivera Guido Américo, Sarango Julca Duglas Donal', 'Comparación entre un Modelo Numérico y Físico en el Estudio del oleaje en La Costa Verde – Región Callao'),
  createData('Vargas Huanca Wilder', 'Berbel Julio, Del Águila Sandra, Díaz Cano Esther', 'Valoración económica de sistemas ancestrales de recarga artificial de acuíferos en entornos de Alta Montaña de Sierra Nevada, España'),
  createData('Ventura Rosas Harold Hans', 'Rivera Leslie, Castilla Chanco Erick,  Cántaro Gideael, Quisca Samuel', 'Evaluación de la capacidad hidráulica del Aliviadero de la Presa Gallito Ciego bajo escenario de cambio climático utilizando la Ecuación De Fokker-Planck-Kolmogorov y Modelación 3D'),
];

const ApprovedSummary = () => {


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
                  Resumenes Seleccionados / Aprobados
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                      <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                        <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>AUTOR</TableCell>
                        <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>COAUTOR</TableCell>
                        <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>RESUMEN SELECCIONADO</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.summary}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align="start">{row.autor}</TableCell>
                          <TableCell align="start">{row.coautor}</TableCell>
                          <TableCell align="start">{row.summary}</TableCell>
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

export default ApprovedSummary