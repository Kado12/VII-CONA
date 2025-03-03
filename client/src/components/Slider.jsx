import React from "react"
import { Toolbar, Typography, Link, Box, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Slider = () => {

  const imagesSlider = [
    './Ica.jpg',
    './Paracas.jpg',
    './Nazca.jpg',
    './Luren2.jpg',
  ]

  return (
    <>
      {/* Slider */}
      < Swiper
        modules={[Autoplay, Navigation, Pagination]} // Módulos necesarios
        spaceBetween={0} // Espacio entre las imágenes
        slidesPerView={1} // Mostrar una imagen a la vez
        autoplay={{
          delay: 5000, // Cambiar de imagen cada 3 segundos
          disableOnInteraction: false, // No detener el autoplay al interactuar
        }
        }
        loop // Hacer que el slider sea infinito
        className="my-swiper" // Clase personalizada para estilos
      >
        {
          imagesSlider.map((image, index) => (
            <SwiperSlide key={index}>


              <img className="image-slider" src={image} alt={`Slide ${index + 1}`} />

            </SwiperSlide>
          ))
        }
        < div className="principal" >
          <Grid container spacing={1} className="principal-grid" sx={{ height: { md: '100%', sm: 'auto' }, mt: { xs: "10px", sm: "auto" } }}>
            <Grid size={{ xs: 12, sm: 7 }} className="principal-grid-item" sx={{ display: { xs: "flex", sm: "flex" } }}>
              <div className="grid-item--content">
                <Avatar alt="Remy Sharp" src="./Logo.png" sx={{ width: { sm: 80, xs: 40 }, height: { sm: 80, xs: 40 }, bgcolor: "#ffffff99", mb: 1 }} />
                <Typography variant="h3" component="div" sx={{
                  flexGrow: 1,
                  fontSize: {
                    xs: '1.5rem', // Tamaño para pantallas muy pequeñas (móviles)
                    sm: '2rem',   // Tamaño para pantallas pequeñas (móviles/tablets)
                    md: '2.5rem', // Tamaño para pantallas medianas (tablets/desktops)
                    lg: '3rem',   // Tamaño para pantallas grandes (desktops)
                    xl: '3.5rem', // Tamaño para pantallas muy grandes
                  }
                }}>
                  VII CONGRESO NACIONAL DEL AGUA
                </Typography>
                <div className="grid-item--date">
                  <Typography variant="h6" component="div" sx={{
                    flexGrow: 1, fontSize: {
                      xs: '.5rem', // Tamaño para pantallas muy pequeñas (móviles)
                      sm: '.7rem',   // Tamaño para pantallas pequeñas (móviles/tablets)
                      md: '.8rem', // Tamaño para pantallas medianas (tablets/desktops)
                      lg: '1.1rem',   // Tamaño para pantallas grandes (desktops)
                      xl: '1.5rem', // Tamaño para pantallas muy grandes
                    }
                  }}>
                    5 AL 8 DE NOVIEMBRE DE 2025 - Ica, Perú
                  </Typography>
                </div>
                <Typography variant="h6" component="div" sx={{
                  flexGrow: 1, fontSize: {
                    xs: '.5rem', // Tamaño para pantallas muy pequeñas (móviles)
                    sm: '.8rem',   // Tamaño para pantallas pequeñas (móviles/tablets)
                    md: '1rem', // Tamaño para pantallas medianas (tablets/desktops)
                    lg: '1.5rem',   // Tamaño para pantallas grandes (desktops)
                    xl: '2rem', // Tamaño para pantallas muy grandes
                  }
                }}>
                  "CIENCIA E INGENIERÍA DEL AGUA EN UN ENTORNO CAMBIANTE"
                </Typography>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 5 }} className="principal-grid-item" sx={{ display: { xs: "none", sm: "flex" } }}>
              <div className="grid-item--content">
                <Typography variant="h6" component="div" sx={{
                  flexGrow: 1, fontSize: {
                    xs: '.5rem', // Tamaño para pantallas muy pequeñas (móviles)
                    sm: '.8rem',   // Tamaño para pantallas pequeñas (móviles/tablets)
                    md: '1rem', // Tamaño para pantallas medianas (tablets/desktops)
                    lg: '1.5rem',   // Tamaño para pantallas grandes (desktops)
                    xl: '2rem', // Tamaño para pantallas muy grandes
                  }
                }}>
                  ORGANIZADO POR:
                </Typography>
                <div style={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar variant="square" alt="Remy Sharp" src="./CIP.png" sx={{ width: { md: 80, sm: 60, xs: 50 }, height: { md: 80, sm: 60, xs: 50 }, bgcolor: "#ffffff99", borderRadius: 2, margin: { xs: "1px", sm: "5px" } }} />
                  <Typography variant="h6" component="div" sx={{
                    flexGrow: 1, fontSize: {
                      xs: '.5rem', // Tamaño para pantallas muy pequeñas (móviles)
                      sm: '.8rem',   // Tamaño para pantallas pequeñas (móviles/tablets)
                      md: '1rem', // Tamaño para pantallas medianas (tablets/desktops)
                      lg: '1.5rem',   // Tamaño para pantallas grandes (desktops)
                      xl: '1.8rem', // Tamaño para pantallas muy grandes
                    }, display: { xs: "none", sm: "block" }
                  }}>
                    Colegio de Ingeniero del Perú
                  </Typography>
                </div>
                <div style={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar variant="square" alt="Remy Sharp" src="./UNICA.png" sx={{ width: { md: 80, sm: 60, xs: 50 }, height: { md: 80, sm: 60, xs: 50 }, bgcolor: "#ffffff99", borderRadius: 2, margin: { xs: "1px", sm: "5px" } }} />

                  <Typography variant="h6" component="div" sx={{
                    flexGrow: 1, fontSize: {
                      xs: '.5rem', // Tamaño para pantallas muy pequeñas (móviles)
                      sm: '.8rem',   // Tamaño para pantallas pequeñas (móviles/tablets)
                      md: '1rem', // Tamaño para pantallas medianas (tablets/desktops)
                      lg: '1.5rem',   // Tamaño para pantallas grandes (desktops)
                      xl: '1.8rem', // Tamaño para pantallas muy grandes
                    }, display: { xs: "none", sm: "block" }
                  }}>
                    Universidad Nacional San Luis Gonzaga de Ica
                  </Typography>
                </div>
                <div style={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar variant="square" alt="Remy Sharp" src="./UNI.png" sx={{ width: { md: 80, sm: 60, xs: 50 }, height: { md: 80, sm: 60, xs: 50 }, bgcolor: "#ffffff99", borderRadius: 2, margin: { xs: "1px", sm: "5px" } }} />

                  <Typography variant="h6" component="div" sx={{
                    flexGrow: 1, fontSize: {
                      xs: '.5rem', // Tamaño para pantallas muy pequeñas (móviles)
                      sm: '.8rem',   // Tamaño para pantallas pequeñas (móviles/tablets)
                      md: '1rem', // Tamaño para pantallas medianas (tablets/desktops)
                      lg: '1.5rem',   // Tamaño para pantallas grandes (desktops)
                      xl: '1.8rem', // Tamaño para pantallas muy grandes
                    }, display: { xs: "none", sm: "block" }
                  }}>
                    Facultad de Ingeniería Civil UNICA
                  </Typography>
                </div>
                <div style={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar variant="square" alt="Remy Sharp" src="./APIHA.png" sx={{ width: { md: 80, sm: 60, xs: 50 }, height: { md: 80, sm: 60, xs: 50 }, bgcolor: "#ffffff99", borderRadius: 2, margin: { xs: "1px", sm: "5px" } }} />

                  <Typography variant="h6" component="div" sx={{
                    flexGrow: 1, fontSize: {
                      xs: '.5rem', // Tamaño para pantallas muy pequeñas (móviles)
                      sm: '.8rem',   // Tamaño para pantallas pequeñas (móviles/tablets)
                      md: '1rem', // Tamaño para pantallas medianas (tablets/desktops)
                      lg: '1.5rem',   // Tamaño para pantallas grandes (desktops)
                      xl: '1.8rem', // Tamaño para pantallas muy grandes
                    }, display: { xs: "none", sm: "block" }
                  }}>
                    APIHA
                  </Typography>
                </div>
              </div>

            </Grid>
          </Grid>
        </div >
      </Swiper >
    </>
  )
}

export default Slider