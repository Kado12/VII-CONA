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

const createData = (name, last_name, summary) => {
  return { name, last_name, summary }
}

const rows = [
  createData('David Jorge', 'Alarcon Ataucusi', 'Implementación Del Modelo Hidrológico Distribuido Tetis En La Cuenca Del Río Cachi, Ayacucho'),
  createData('Eduardo Jesús', 'Aldana Vásquez', 'Modelamiento Bim Del Diseño Y La Planificación De La Construcción De La Presa Cfrd, Ninahuisa'),
  createData('Ada', 'Arancibia', 'Avances En La Investigación De Los Techos Verdes Como Suds'),
  createData('Hulinho Yordy', 'Arbaiza Ocrospoma', 'Análisis Multicriterio Mediante Sistema De Información Geográfica Para La Selección Del Sitio Y Tipo De Presa Óptimo En La Cuenca Del Río Lurín'),
  createData('Joel Victor', 'Atencio Oliva', 'Simulación De Flujos De Lodos En Un Canal De Laboratorio – Quebrada Malanche, Punta Hermosa'),
  createData('Gustavo Adolfo', 'Atúncar Zevallos', 'Aplicación De Inteligencia Artificial En La Simulación De Escorrentía: Un Análisis Comparativo Entre Red Neuronal LSTM Y El Modelo Hidrológico SWAT'),
  createData('Ivan Arturo', 'Ayala Bizarro', 'Análisis Comparativo Del Runout En Flujos No Newtonianos Sobre Canales Escalonados Mediante Experimentación Física Y Modelación Cfd'),
  createData('Hugo Miguel', 'Benito Rojas', 'Uso Del Número De Vedernikov En El Diseño De Canales De Alta Pendiente'),
  createData('Juan Walter', 'Cabrera Cabrera', 'Método De Área Pendiente Modificado Para La Estimación De Caudales En Ríos De Lecho Pedregoso De La Costa Peruana'),
  createData('Alejandro', 'Cano Valencia', 'Impacto De Un Depósito De Detención De Lluvias En La Capacidad Hidráulica De Una Red De Drenaje Pluvial En Arequipa'),
  createData('Gideael Quislón', 'Cántaro Fabián', 'Diseño Hidráulico Optimizado De Aliviaderos Escalonados Convergente En Presas RCC, Mediante Modelación 3D'),
  createData('Eduardo Jesús', 'Carpio Ancalle', 'Comparación De Modelos Hidrológicos Conceptuales Para La Infraestructura Natural Basada En Bofedales En La Cuenca Alta Del Río Vilcanota'),
  createData('María Lourdes', 'Chambilla Chipana', 'Ecosistemas Rurales En Transición: Implicancias Hídricas Y Paisajísticas En Miculla – Tacna'),
  createData('Eduardo Abraham', 'Chávarri Velarde', 'Impactos Del Cambio Climatico Y La Variabilidad En La Precipitacion Y Los Caudales Maximos En La Quebrada Del Diablo, Tacna, Peru'),
  createData('Luis Angel', 'Chavez Ayala', 'Cunetas Verdes Como Alternativa Sostenible: Análisis Comparativo Mediante La Modelación Física'),
  createData('Carolina Elizabeth', 'Cruz Rodriguez', 'El Estrés Hídrico Del Cultivo Del Olivo En La Cabecera Desierto Atacama: Un Enfoque Basado En Teledetección E Inteligencia Artificial'),
  createData('Adriana Samantha ', 'Escobedo López ', 'Influencia Del Fenómeno El Niño Y La Antropización En Caudales De Las Cuencas Piura Y Zaña. Un Enfoque De Pronóstico'),
  createData('Richard Smith ', 'Esteban Yauyo ', 'Determinación De Cotas De Inundación Extrémales En La Punta – Callao Mediante Modelación Numérica En Python'),
  createData('Jose Antonio', 'Flores Riveros', 'Evaluación De Variables Predictoras E Incertidumbre En La Estimación De La Evapotranspiración Mediante Redes Neuronales'),
  createData('Joseph Frankchesco', 'Gastelu Silvera', 'Teledetección De Clorofila-A En Ecosistemas Acuáticos Altoandinos: Análisis De Series Temporales 2017-2025'),
  createData('Juan Eduardo', 'Gil Mora', 'Determinación Del Índice De Calidad Del Agua De Dos Ríos Urbanos En La Ciudad Del Cusco: Saphy Y Cachimayu'),
  createData('Juan Eduardo', 'Gil Mora', 'Determinación Del Índice De Calidad Del Agua De Dos Ríos Urbanos En La Ciudad Del Cusco: Saphy Y Cachimayu'),
  createData('José', 'Guevara Bendezu', 'Gestión Integrada Del Recurso Hídrico Del Rio Ica Almacenando Excedentes Anuales, Evaluación Prospectiva Al 2030'),
  createData('Roger', 'Hidalgo García', 'Cunetas Verdes Como Alternativa Sostenible: Análisis Comparativo Mediante La Modelación Física'),
  createData('Joseph Rubén Francisco', 'Huanay Pérez', 'Calibración De Hidrogramas Unitarios Sintéticos Para Estimar Caudales De Avenida En Cuencas De La Zona Altoandina Del Departamento De Huánuco'),
  createData('José Luis', 'Huanuqueño Murillo', 'Monitoreo Multitemporal Del Estrés Hídrico En Arrozales De La Región Lambayeque Mediante Imágenes Satelitales Calibradas Mediante Drones Con Cámaras Térmicas'),
  createData('German ', 'Huayna Felipe', 'Dinámica Y Proyecciones De Ecosistemas De Alta Montaña En Entornos Áridos Y Su Incidencia En El Acuífero Caplina: Análisis Con CA-Markov En La Cordillera Del Barroso, Tacna, Perú'),
  createData('Emilio Domingo', 'Injante Lima', 'Preservación De Reserva De Huarangos (Prosopis Limensis) En El Valle De Ica: Una Estrategia De Reforestación Con Reúso De Aguas Residuales Domésticas'),
  createData('Eriksson Joseph', 'Jamanca Espinoza', 'Comparativa Técnico-Económica De Soluciones Rígidas Y Flexibles En Quebradas Activas: Lecciones Para La Gestión Sostenible Del Agua Y Sedimentos'),
  createData('Hana Paich', 'Luna Visitación', 'Modelamiento Hidrológico Para Identificar Áreas De Riesgo En La Subcuenca Quillcay, Sector Nueva Florida, Distrito Independencia 2024'),
  createData('Jhon Deyver Max ', 'Mallqui Durand', 'Modelación Hidrodinámica Para El Transporte De Mercurio Asociado A Pulsos De Sedimentos En El Río Madre De Dios'),
  createData('Albert Johan', 'Mamani Larico', 'Integración De Procesos Ecohidrológicos De Ecosistemas Semiáridos De Montaña Para La Gestión De Intervenciones De Interés Hídrico'),
  createData('Enrique', 'Meseth Macchiavello', 'Gestión De Recursos Hídricos Y Agricultura En Vilcabamba, Cusco, Desde Los Incas Hasta La Actualidad'),
  createData('Sebastián Alonso', 'Murga Paniagua', 'Evaluación Comparativa De Modelos Analíticos, Físicos Y Numéricos Para El Diseño De Disipadores De Energía Tipo USBR II'),
  createData('Marco Alberto', 'Navarro Guzmán', 'Variabilidad Espacial De Ecosistemas Reguladores De Agua Al Sur Del Perú: Clima O Actividad Humana'),
  createData('Yeremi Victor', 'Paliza Magallanes', 'Análisis De Niveles De Peligro Por Inundaciones Pluviales En La Quebrada Sahuanay, Distrito De Abancay, Departamento De Apurímac – 2025'),
  createData('Carlos Efrain', 'Paucar Hilario', 'Aspectos Ingenieriles En La Agresividad Térmica En El Centro Poblado Santa Bárbara – Huancavelica'),
  createData('Carlos Efrain', 'Paucar Hilario', 'Microclima Vertical En La Escuela De Ingeniería Civil De La Universidad Nacional De Huancavelica: Estabilidad Térmica Y Riesgos Urbanos'),
  createData('Clifton', 'Paucar Y Montenegro', 'Integración De Rusle/Sdr Con Sig Para Evaluar Erosión Y Rendimiento De Sedimentos En Laderas Andinas En Proceso De Urbanización'),
  createData('Edwin Martin', 'Pino Vargas', 'Determinación De Zonas Vulnerables A Inundaciones Repentinas Usando Técnicas De Inteligencia Artificial En Regiones Áridas, Norte Del Desierto De Atacama'),
  createData('Edwin Martin', 'Pino Vargas', 'Dinámica De La Cobertura Terrestre Y Predicciones Proyectadas Cabecera Desierto De Atacama: Un Enfoque Basado En Teledetección E Inteligencia Artificial'),
  createData('Victor M.', 'Ponce', 'La Onda Cinemática Desmitificada'),
  createData('Victor Miguel', 'Ponce', 'Ondas Cinemático-Dinámicas Mixtas Desbancadas'),
  createData('Pedro', 'Rau', 'Influencia Del Fenómeno El Niño Y La Antropización En Caudales De Las Cuencas Piura Y Zaña. Un Enfoque De Pronóstico'),
  createData('Pedro', 'Rau', 'Una Aproximación A La Reconstrucción Hidrológica Y Revalorización Histórica Del Rio Zaña En Los Últimos 500 Años'),
  createData('Eric', 'Rendón Schneir', 'Análisis Del Enfoque Económico En La Gestión Hídrica En El Perú: Antecedentes Y Perspectivas'),
  createData('Johan Antonio', 'Rivera Huaman', 'Modelamiento Bim En La Planificación De La Construcción De La Presa De Concreto Gravedad Quisco'),
  createData('Johan Antonio', 'Rivera Huaman', 'Modelamiento Bim De La Construcción De La Presa De Concreto Gravedad Quisco'),
  createData('Miluska Anthuannet', 'Rosas Barturén', 'Transformación Del Territorio Fluvial Por Asentamientos Informales: Riesgos Emergentes Para La Infraestructura Urbana'),
  createData('Marcelo', 'Saldaña Quisca', 'Evaluación De La Seguridad Física Y Funcional De La Presa Tinajones Mediante Análisis 3d De Filtración Y De Esfuerzo-Deformación'),
  createData('Ma Magdalena ', 'Sánchez Astello', 'Determinación Del Tiempo De Ejecución De Un Proyecto A Través Del Diagrama De Redes Y De La Ruta Crítica: Estudio De Caso'),
  createData('Ma. Magdalena', 'Sánchez Estello', 'Administración De Obras De Infraestructura Hidroagrícola Mediante La Aplicación De Cpm Y Diagramas De Gantt: Un Estudio De Caso'),
  createData('Kory Celeste ', 'Sánchez Gamarra', 'Modelamiento Numérico Para El Diseño De Coberturas De La Relavera Mesapata Considerando Los Efectos Del Cambio Climático'),
  createData('Enrique Leoncio', 'Tafur Gutierrez', 'Comparación Entre Un Modelo Numérico Y Físico En El Estudio Del Oleaje En La Costa Verde – Región Callao'),
  createData('Wilber', 'Vargas Huanca', 'Valoración Económica De Sistemas Ancestrales De Recarga Artificial De Acuíferos En Entornos De Alta Montaña De Sierra Nevada, España'),
  createData('Harold Hans', 'Ventura Rosas', 'Evaluación De La Capacidad Hidráulica Del Aliviadero De La Presa Gallito Ciego Bajo Escenario De Cambio Climático Utilizando La Ecuación De Fokker-Planck-Kolmogorov Y Modelación 3d')
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
              <Box component="section" sx={{ p: 2, bgcolor: 'rgba(160, 135, 113, 0.49)', textAlign: 'center', fontWeight: 'bold', border: 1, borderColor: 'rgb(177, 156, 138)', borderStyle: 'solid', margin: 1 }}>
                <Typography variant="p" color="primary" component="div" sx={{ flexGrow: 1, textShadow: '0px 0px 5px #3af' }}>
                  COMUNICADO DE LA COMISION DE EVALUACION DE RESUMENES DE INVESTIGACION
                </Typography>
                <Box sx={{ p: 2, textAlign: 'justify' }}>
                  <Typography variant="body2" color="text.primary" marginBottom={1}>
                    La Comisión de Evaluación de Resúmenes de las ponencias que serán expuestas en el VII Congreso Nacional del Agua, expresa sus disculpas por el retraso en la publicación de los resultados, ya que al tener una demanda importante de investigadores de las universidades públicas y privadas, esto recargo el tiempo de evaluación y por ello presentamos las Ponencias que han sido aprobadas y admitidas en el VII Congreso Nacional de Agua 2025, recomendando que remitan el resumen extendido y que también tener en cuenta su inscripción y pronta cancelación de la misma como Ponentes.
                  </Typography>
                  <Typography variant="body2" color="text.primary" marginBottom={1}>
                    Así mismo, indicar que aquellos Ponentes que requieran validar esta participación y están en esta lista de seleccionados/aprobados, pueden solicitar un documento oficial expedido por el Decanato de la Facultad de Ingeniería Civil de la Universidad Nacional San Luis Gonzaga para los fines que consideren pertinentes.
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Agradecemos la participación en esta fase y felicitamos a aquellos que quedaron seleccionado para la siguiente fase de resumen extendido a cumplirse el 15 de octubre del 2025 y su exposición en el VII CONA.
                  </Typography>
                </Box>
                <Box sx={{ p: 2, textAlign: 'end' }}>
                  <Typography variant="body2" color="text.primary" fontWeight="bold">
                    Atentamente
                  </Typography>
                  <Typography variant="body2" color="primary" fontWeight="bold">
                    Comisión Evaluación de Resúmenes - VII CONA 2025
                  </Typography>
                </Box>
              </Box>
              <Box component="section" sx={{ p: 2 }}>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                  Resumenes Seleccionados / Aprobados
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                      <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                        <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>NOMBRES</TableCell>
                        <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>APELLIDOS</TableCell>
                        <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>RESUMEN SELECCIONADO</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.summary}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align="start">{row.name}</TableCell>
                          <TableCell align="start">{row.last_name}</TableCell>
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