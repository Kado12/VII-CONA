import React from "react"
import { AppBar, Toolbar, Typography, Link, Box, Avatar, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const ListNav = () => {

  return (
    <>
      <Box sx={{ bgcolor: '#f0f0f0', borderRadius: 1, p: 1 }}>
        <ListItemButton component="a" href="/">
          <ListItemText primary="Vista General" />
        </ListItemButton>
        <ListItemButton component="a" href="/inscriptions">
          <ListItemText primary="Inscripciones" />
        </ListItemButton>
        <ListItemButton component="a" href="/committe">
          <ListItemText primary="Comité" />
        </ListItemButton>
        <ListItemButton component="a" href="/thematic-axes">
          <ListItemText primary="Ejes Temáticos" />
        </ListItemButton>
        <ListItemButton component="a" href="/schedule">
          <ListItemText primary="Cronograma" />
        </ListItemButton>
      </Box>
      <Box sx={{ bgcolor: '#f0f0f0', borderRadius: 1, mt: 3 }}>
        <ListItemButton component="a" disabled sx={{ bgcolor: "blue", color: "white" }} >
          <ListItemText primary="Contacto" />
        </ListItemButton>
        <ListItemButton component="a" href="mailto:viicona2025@gmail.com">
          <ListItemText primary="📧 Correo" />
        </ListItemButton>
        <ListItemButton component="a" href="https://wa.me/+51983688826">
          <ListItemText primary="📱WhatsApp" />
        </ListItemButton>
      </Box>
    </>
  )
}

export default ListNav