// src/components/Header.jsx
import { AppBar, Toolbar, Typography, Link, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      component={motion.header}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Toolbar>
        <Avatar alt="Remy Sharp" src="./Logo.png" sx={{ width: 56, height: 56 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Proyecto
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="/" underline="none" fontWeight="bold">
            Inicio
          </Link>
          <Link href="/inscriptions" underline="none" fontWeight="bold">
            Inscripciones
          </Link>
          <Link href="/schedule" underline="none" fontWeight="bold">
            Cronograma
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}