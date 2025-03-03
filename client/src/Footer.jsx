// src/components/Footer.jsx
import { Box, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        backgroundColor: 'rgb(66, 87, 117)',
        color: 'white',
        py: 3,
        px: 4,
        mt: 'auto',
        textAlign: 'center',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.67)',
      }}
    >
      <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
        © 2025 VII CONA. Todos los derechos reservados.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Developed By Kado
        </Typography>
      </Box>
    </Box>
  );
}