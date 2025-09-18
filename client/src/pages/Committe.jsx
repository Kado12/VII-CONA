import React, { useEffect, useState } from "react"
import {
  AppBar, Toolbar, Typography, Link, Box, Avatar, List, ListItem,
  ListItemButton, ListItemText, Divider, Card, CardContent,
  CardMedia, CardActionArea, Modal, IconButton, MobileStepper,
  Button, useTheme
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ChevronLeft, ChevronRight, Close } from '@mui/icons-material';
import ListNav from "../components/ListNav";


const Committe = () => {
  const [openModal, setOpenModal] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const theme = useTheme()

  const images = [
    {
      img: "./CONA_Comite.jpg",
      title: "COMITE ORGANIZADOR",
      description: "COMITE ORGANIZADOR DEL VII CONA",
    },
    {
      img: "./CONA_Presidente.jpg",
      title: "MSC. FREDDY M. FRANCO ALVARADO",
      description: "PRESIDENTE - DECANO DE LA FACULTAD DE ING. CIVIL - UNICA",
    },
    {
      img: "./CONA_Vice.jpg",
      title: "DR. JOSE C. GUEVARA BENDEZU",
      description: "VICEPRESIDENTE - DIRECTOR ACADEMICO FIC - UNICA",
    },
    {
      img: "./CONA_CoorGeneral.jpg",
      title: "MAG. HUGO M. BENITO ROJAS",
      description: "COORDINADOR GENERAL",
    },
    {
      img: "./CONA_Secretario.jpg",
      title: "MAG. MAXIMO A. CRISPIN GOMEZ",
      description: "SECRETARIO",
    },
    {
      img: "./CONA_Tesorera.jpg",
      title: "MAG. MARLENE L. CANALES GUEVARA",
      description: "TESORERA",
    },
    {
      img: "./CONA_CoorIP.jpg",
      title: "MAG. JULIO CESAR ORTIZ ROJAS",
      description: "COORDINADOR DE IMAGEN Y PRENSA",
    },
    {
      img: "./CONA_PdteCapIC.jpg",
      title: "DR. ARTURO GODOY PEREYRA",
      description: "PRESIDENTE - DECANO DE LA FACULTAD DE ING. CIVIL - UNICA",
    },
    {
      img: "./CONA_RepresentanteCEIIN.jpg",
      title: "EST. JULIO GARCIA YUPANQUI",
      description: "REPRESENTANTE DEL CENTRO ESTUDIANTIL DE INNOVACION E INVESTIGACION – CEIIN",
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? images.length - 1 : prevActiveStep - 1
    );
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

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
      name: "DR. LEONCIO HUAYLLANI TAYPE",
      position: "PRESIDENTE DEL CONSEJO DE CUENCA TAMBO SANTIAGO ICA"
    },
    {
      name: "ING. EDWIN CHAVARRI CARAHUATAY",
      position: "DECANO DEL CIP - CONSEJO DEPARTAMENTAL DE LIMA"
    },
    {
      name: "DR. NICOLAS DE PIEROLA CANALES",
      position: "PRESIDENTE ASOC. PERUANA DE ING. HIDRAULICA Y AMBIENTAL"
    }
  ]

  return (
    <div>
      {/* Botón para abrir el modal */}
      <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            backgroundColor: '#56bfb6ff',
            color: 'white',
            borderRadius: '50%',
            width: 60,
            height: 60,
            minWidth: 60,
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            '&:hover': {
              backgroundColor: '#4aa8a0',
              transform: 'scale(1.1)',
            }
          }}
        >
          📸
        </Button>
      </Box>

      {/* Modal con carrusel */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '90%', sm: '80%', md: '70%' },
            maxWidth: 800,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            overflow: 'hidden',
          }}
        >
          {/* Botón de cierre */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              }
            }}
          >
            <Close />
          </IconButton>

          {/* Imagen del carrusel */}
          <Box
            component="img"
            sx={{
              // width: '100%',
              // height: { xs: 250, sm: 350, md: 400 },
              width: '100%',
              height: { xs: 250, sm: 350, md: 400 },
              objectFit: 'contain',
            }}
            src={images[activeStep].img}
            alt={images[activeStep].title}
          />

          {/* Contenido de la imagen */}
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" component="h2">
              {images[activeStep].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {images[activeStep].description}
            </Typography>
          </Box>

          {/* Controles del carrusel */}
          <MobileStepper
            steps={images.length}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={false}
              >
                Siguiente
                {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={false}
              >
                {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                Anterior
              </Button>
            }
            sx={{
              backgroundColor: 'transparent',
              '& .MuiMobileStepper-dot': {
                backgroundColor: '#56bfb6ff',
              },
              '& .MuiMobileStepper-dotActive': {
                backgroundColor: '#4aa8a0',
              }
            }}
          />
        </Box>
      </Modal>
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