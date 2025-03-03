import React from "react"
import { AppBar, Toolbar, Typography, Link, Box, Avatar, List, ListItem, ListItemButton, ListItemText, Divider, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid2';

import ListNav from "../components/ListNav";


const Committe = () => {

  const committe_organizer = [
    {
      name: "MSc. FREDDY M. FRANCO ALVARADO",
      position: "PRESIDENTE - DECANO DE LA FACULTAD DE ING. CIVIL - UNICA"
    },
    {
      name: "DR. JOSE C. GUEVARA BENDEZU",
      position: "VICEPRESIDENTE - DIRECTOR ACADEMICO FIC - UNICA"
    },
    {
      name: "DRA. ADA ARANCIBIA SAMANIEGO",
      position: "ASESORA – APIHA - UNI"
    },
    {
      name: "MAG. HUGO M. BENITO ROJAS",
      position: "COORDINADOR GENERAL"
    },
    {
      name: "MAG. MAXIMO A. CRISPIN GOMEZ",
      position: "SECRETARIO"
    },
    {
      name: "MAG. MARLENE L. CANALES GUEVARA",
      position: "TESORERA"
    },
    {
      name: "MAG. JULIO CESAR ORTIZ ROJAS",
      position: "COORDINADOR DE IMAGEN Y PRENSA"
    },
    {
      name: "DR. ARTURO GODOY PEREYRA",
      position: "PRESIDENTE DEL CAPITULO DE INGENIERIA CIVIL - CIP C.D. ICA"
    },
    {
      name: "MSc. MITCHEL JARA GARCIA",
      position: "REPRESENTANTE DE LA ASOCIACION PERUANA DE INGENIERIA HIDRAULICA Y AMBIENTAL - APIHA"
    },
    {
      name: "DR. FELIX FUENTES QUIJANDRIA",
      position: "REPRESENTANTE DE LA FACULTAD DE AGRONOMIA - UNICA"
    },
    {
      name: "ING. AQUILES BENDEZU BENDEZU",
      position: "REPRESENTANTE DE LA FACULTAD DE ING. AMBIENTAL - UNICA"
    },
    {
      name: "EST. JULIO GARCIA YUPANQUI",
      position: "REPRESENTANTE DEL CENTRO ESTUDIANTIL DE INNOVACION E INVESTIGACION – CEIIN"
    }
  ]

  const committe_honor = [
    {
      name: "DR. DANTE F. CALDERON HUMANI",
      position: "RECTOR DE LA UNIVERSIDAD NACIONAL SAN LUIS GONZAGA"
    },
    {
      name: "DR. JORGE C. HURTADO HERRERA",
      position: "PRESIDENTE DEL GOBIERNO REGIONAL DE ICA"
    },
    {
      name: "ING. CARLOS H. REYES ROQUE",
      position: "ALCALDE DE LA MUNICIPALIDAD PROVINCIAL DE ICA"
    },
    {
      name: "D9R:.0LEONCIO HUAYLLANI TAYPE",
      position: "PRESIDENTE DEL CONSEJO DE CUENCA TAMBO SANTIAGO ICA"
    },
    {
      name: "PRESIDENTE DEL CONSEJO DE CUENCA TAMBO SANTIAGO ICA",
      position: "DECANO DEL CIP - CONSEJO DEPARTAMENTAL DE LIMA"
    },
    {
      name: "DR. NICOLAS DE PIEROLA CANALES",
      position: "PRESIDENTE ASOC. PERUANA DE ING. HIDRAULICA Y AMBIENTAL"
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
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                  Comité Organizador
                </Typography>
                {committe_organizer.map((item, index) => (
                  <ListItemButton key={index} component="a" href="#simple-list">
                    <ListItemText primary={item.name} secondary={item.position} />
                  </ListItemButton>
                ))}
                <Divider sx={{ m: 2 }} />
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', px: 2, fontWeight: 'bold', mb: 2 }}>
                  Comité de Honor
                </Typography>
                {committe_honor.map((item, index) => (
                  <ListItemButton key={index} component="a" href="#simple-list">
                    <ListItemText primary={item.name} secondary={item.position} />
                  </ListItemButton>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default Committe