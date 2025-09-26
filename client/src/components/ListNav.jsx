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
        <ListItemButton component="a" href="/eco-hidro">
          <ListItemText primary="Feria EcoHidro" />
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
        <ListItemButton component="a" href="/seat">
          <ListItemText primary="Sede" />
        </ListItemButton>
        <ListItemButton component="a" href="/news-events">
          <ListItemText primary="Noticias y Eventos" />
        </ListItemButton>
        <ListItemButton component="a" href="/summary">
          <ListItemText primary="Resumenes Extendidos" />
        </ListItemButton>
      </Box>
      <Box sx={{ bgcolor: '#f0f0f0', borderRadius: 1, mt: 3 }}>
        <ListItemButton component="a" disabled sx={{ bgcolor: "blue", color: "white" }} >
          <ListItemText primary="Contacto" />
        </ListItemButton>
        <ListItemButton component="a" href="mailto:viicona2025@gmail.com">
          <ListItemText primary="📧 Correo" />
        </ListItemButton>
        <ListItemButton component="a" href="mailto:hbenitor@gmail.com">
          <ListItemText primary="📧 Correo Consultas" />
        </ListItemButton>
        <ListItemButton component="a" href="https://wa.me/+51983688826">
          <ListItemText primary="📱WhatsApp Consultas 1" />
        </ListItemButton>
        <ListItemButton component="a" href="https://wa.me/+51959847603">
          <ListItemText primary="📱WhatsApp Consultas 2" />
        </ListItemButton>
        <ListItemButton component="a" href="https://wa.me/+51956605580">
          <ListItemText primary="📱WhatsApp Consultas 3" />
        </ListItemButton>
      </Box>
    </>
  )
}

export default ListNav