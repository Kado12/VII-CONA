import {
   Modal,
   Box,
   IconButton,
   Typography,
   Fade,
   Backdrop,
} from '@mui/material';
import { Close } from '@mui/icons-material';

const Modals = ({
   open,
   onClose,
   // videoSrc,
   // poster,
   title,
   subtitle,
   children,        // ← opcional: si queremos pasar algo más (lista, texto, etc.)
}) => (
   <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 400 } }}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
   >
      <Fade in={open}>
         <Box
            sx={{
               position: 'relative',
               width: { xs: '95%', sm: '80%', md: 400 },
               maxWidth: 400,
               bgcolor: 'background.paper',
               borderRadius: 2,
               boxShadow: 24,
               overflow: 'hidden',
               outline: 'none',
               paddingTop: 4,
               maxHeight: '90vh',          // ← nuevo
               overflowY: 'auto',
            }}
         >
            {/* Cierre */}
            <IconButton
               onClick={onClose}
               sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  zIndex: 2,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.9)' },
               }}
            >
               <Close />
            </IconButton>

            {/* Título / subtítulo */}
            {(title || subtitle) && (
               <Box sx={{ p: 2, textAlign: 'center' }}>
                  {title && (
                     <Typography variant="h6" sx={{ color: '#007BFF' }}>
                        {title}
                     </Typography>
                  )}
                  {subtitle && (
                     <Typography variant="body2" color="text.secondary">
                        {subtitle}
                     </Typography>
                  )}
               </Box>
            )}
            {/* Video (o cualquier otro contenido) */}
            {/* {videoSrc ? (
               <Box sx={{ width: '100%' }}>
                  <video
                     style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '70vh',
                        display: 'block',
                     }}
                     controls
                     autoPlay
                     muted
                     poster={poster}
                  >
                     <source src={videoSrc} type="video/mp4" />
                     Tu navegador no soporta el elemento de video.
                  </video>
               </Box>
            ) : (
               children
            )} */}
            {children}

         </Box>
      </Fade>
   </Modal>
);

export default Modals;