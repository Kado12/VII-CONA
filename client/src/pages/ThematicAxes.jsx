import * as React from 'react';
import { AppBar, Toolbar, Typography, Link, Box, Avatar, List, ListItem, ListItemButton, ListItemText, Divider, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid2';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ListNav from "../components/ListNav";

const ThematicAxes = () => {

  const thematic_axes = [
    {
      title: "1.	Cambio climático en zonas áridas e hiperáridas",
      objetive: `Ampliar el conocimiento entre las condiciones climáticas y los procesos hídricos con énfasis de regiones áridas e hiperáridas.`,
      sub_axes: [
        'Variabilidad y cambio climático',
        'Precipitaciones extremas',
        'Hidráulica y transporte de sedimentos',
        'Hidrogeología'
      ]
    },
    {
      title: "2.	Hidrología, climatología y cuerpos de agua",
      objetive: `Ampliar el conocimiento de la relación entre las condiciones climáticas y los procesos hídricos terrestres`,
      sub_axes: [
        'Precipitaciones regulares y extremas',
        'Hidráulica y transporte de sedimentos',
        'Morfodinámica (de ríos, lagos y costas)',
        'Hidrogeología',
        'Análisis de la sostenibilidad ambiental, servicios ecosistémicos.'
      ]
    },
    {
      title: "3.	Usos y gestión del agua",
      objetive: `Fortalecer los principios para garantizar la sostenibilidad del uso del agua, desarrollar la resiliencia climática y fortalecer la gestión integrada de los recursos hídricos.`,
      sub_axes: [
        'Gestión integral de los recursos hídricos (optimización, usos del agua, reúso, etc.)',
        'Nexo agua-energía-seguridad alimentaria',
        'Gestión de sistemas de agua y alcantarillado urbano y rural',
        'Gestión de riesgos hidro-meteorológicos',
        'Teledetección y SIG en recursos hídricos'
      ]
    },
    {
      title: "4.	Infraestructura hídrica",
      objetive: `Presentar consideraciones y procedimientos de diseño relacionados con la forma y función de diferentes tipos de estructuras hidráulicas.`,
      sub_axes: [
        'Estructuras de almacenamiento',
        'Estructuras de conducción',
        'Centrales hidroeléctricas',
        'Soluciones basadas en la naturaleza',
        'Desarrollo de infraestructura hidráulica',
        'Irrigación y uso eficiente del agua'
      ]
    },
    {
      title: "5.	Agua y Sociedad",
      objetive: `Analizar y evaluar críticamente los roles y relaciones inherentes al agua y su uso en nuestra sociedad en diversos periodos de nuestra historia.`,
      sub_axes: [
        'Conocimiento ancestral del agua',
        'Educación en ingeniería del agua',
        'Hidráulica experimental',
        'Diálogo interdisciplinario referido al agua (Salud, aspectos sociales, culturales, artísticos, etc.)'
      ]
    }
  ]


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
                <div>
                  {thematic_axes.map((item, index) => (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span" sx={{ fontWeight: "bold" }}>{item.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Objetivo: {item.objetive}
                        </Typography>
                        <List>
                          <Divider />
                          <ListItem sx={{ padding: 0 }}>
                            <ListItemText primary='Sub Ejes' />
                          </ListItem>
                          <Divider />
                          {item.sub_axes.map((sub_item, sub_index) => (
                            <ListItem key={sub_index}>
                              <ListItemText primary={sub_item} />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  ))}

                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>

  )
}

export default ThematicAxes