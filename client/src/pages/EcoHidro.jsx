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

const createData = (category, cost, concept) => {
  return { category, cost, concept }
}

const rows = [
  createData('EMPRESAS A', 'S/5000.00', `Stand modular de 4m de largo por 3m de ancho`),
  createData('EMPRESAS B', 'S/2500.00', `Stand modular de 3m de largo por 2m de ancho`),
  createData('INSTITUCIONES INVITADAS', 'S/1000.00', `Stand modular de 3m de largo por 2m de ancho`),


];

const EcoHidro = () => {


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
                  Inscripciones
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ bgcolor: 'rgb(98, 98, 132)' }}>
                      <TableRow sx={{ color: 'white', fontWeight: 'bold' }}>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>CATEGORÍA</TableCell>
                        <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>COSTO</TableCell>
                        <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>CONCEPTO</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.category}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.category}
                          </TableCell>
                          <TableCell align="center">{row.cost}</TableCell>
                          <TableCell align="center">{row.concept}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', py: 2, fontWeight: 'bold', mb: 2 }}>
                  Como Inscribirse
                </Typography>
                <Timeline className="timeline">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Verificar la categoría a elegir</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Hacer el pago mediante BCP: <strong style={{ fontWeight: "bold" }}>380-05755648-0-47</strong> - CCI: <strong style={{ fontWeight: "bold" }}>00238010575564804742</strong></TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Completar el siguiente formulario: <a href="https://forms.gle/jxYQsmAnUqDUv64f9" style={{ color: "red", textDecoration: "none", fontWeight: "bold" }}>Inscripción Feria EcoHidro</a></TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default EcoHidro