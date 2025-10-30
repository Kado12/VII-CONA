import React from 'react';
import { TableContainer, Paper, Table, TableRow, TableCell, TableBody, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ListNav from '../components/ListNav';



/* ---------- paleta de colores (igual que tu imagen) ---------- */
const colors = {
   header: '#9bdbfbff',
   register: '#dbdbdbff',
   magistral: '#ffdfacff',
   technique: '#fefeb6ff',
   course: '#ffb9e9ff',
   lunch: '#b3f1b3ff',
   visit_technique: '#ff97ceff',
   visit_laboratory: '#c7c4ffff',
   opening: '#ff5858ff',
   closing: '#ff7b7bff',
   viii_cona: '#94c2ffff',
};

/* ---------- celda reutilizable ---------- */
const Cell = ({ children, rowSpan = 1, colSpan = 1, bg = '#fff' }) => (
   <TableCell
      rowSpan={rowSpan}
      colSpan={colSpan}
      sx={{
         p: 1,
         textAlign: 'center',
         fontSize: '.75rem',
         fontWeight: 700,
         lineHeight: 1.2,
         backgroundColor: bg,
         borderRight: '1px solid #090909ff',
         borderBottom: '1px solid #000000ff',
         borderLeft: '1px solid #000000ff',
         borderTop: '1px solid #000000ff',
         verticalAlign: 'middle',
      }}
   >
      {children}
   </TableCell>
);

/* ---------- componente ---------- */
export default function GeneralProgram() {
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
                           PROGRAMA GENERAL
                        </Typography>


                        <TableContainer component={Paper} sx={{ maxWidth: 1200, mx: 'auto', mt: 2 }}>

                           <Table size="small">
                              <TableBody>
                                 {/* ---------- header ---------- */}
                                 <TableRow>
                                    <Cell bg={colors.header} rowSpan={3}>HORA</Cell>
                                    <Cell bg={colors.header} colSpan={2}>AUDITORIO FIC - UNICA</Cell>
                                    <Cell bg={colors.header} colSpan={4}>SALA "SOL DE ICA" - HOTEL LAS DUNAS</Cell>
                                 </TableRow>
                                 <TableRow>
                                    <Cell bg={colors.header} colSpan={2}>CURSOS PRE CONGRESO</Cell>
                                    <Cell bg={colors.header} colSpan={4}>VII CONA ICA 2025</Cell>
                                 </TableRow>
                                 <TableRow>
                                    <Cell bg={colors.header}>LUNES 3 NOV</Cell>
                                    <Cell bg={colors.header}>MARTES 4 NOV</Cell>
                                    <Cell bg={colors.header}>MIÉRCOLES 5 NOV</Cell>
                                    <Cell bg={colors.header}>JUEVES 6 NOV</Cell>
                                    <Cell bg={colors.header}>VIERNES 7 NOV</Cell>
                                    <Cell bg={colors.header}>SÁBADO 8 NOV</Cell>
                                 </TableRow>

                                 {/* ---------- 08:00 - 08:30 ---------- */}
                                 <TableRow>
                                    <Cell>08:00 - 08:30 am</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.visit_technique} rowSpan={10}>VISITAS TECNICAS Y TURISTICAS</Cell>
                                 </TableRow>

                                 {/* ---------- 08:30 - 09:00 ---------- */}
                                 <TableRow>
                                    <Cell>08:30 - 09:00 am</Cell>
                                 </TableRow>

                                 {/* ---------- 09:00 - 09:30 ---------- */}
                                 <TableRow>
                                    <Cell>09:00 - 09:30 am</Cell>
                                    <Cell bg={colors.course} rowSpan={8}>CURSO PRE CONGRESO</Cell>
                                    <Cell bg={colors.course} rowSpan={8}>CURSO PRE CONGRESO</Cell>
                                    <Cell bg={colors.opening} rowSpan={2}>CEREMONIA DE INAUGURACIÓN</Cell>
                                    <Cell>PONENCIA T4-02</Cell>
                                    <Cell bg={colors.visit_laboratory} rowSpan={2}>
                                       VISITA LABORATORIO DE HIDRAULICA FIC UNICA
                                    </Cell>
                                 </TableRow>

                                 {/* ---------- 09:30 - 10:00 (vacía) ---------- */}
                                 <TableRow>
                                    <Cell>09:30 - 10:00 am</Cell>
                                    <Cell>PONENCIA T4-03</Cell>
                                 </TableRow>

                                 {/* ---------- 10:00 - 10:30 ---------- */}
                                 <TableRow>
                                    <Cell>10:00 - 10:30 am</Cell>
                                    <Cell bg={colors.magistral} rowSpan={2}>CONFERENCIA MAGISTRAL: DR. MASATO KOBIYAMA</Cell>
                                    <Cell bg={colors.magistral} rowSpan={2}>CONFERENCIA MAGISTRAL: DR. VICTOR PONCE</Cell>
                                    <Cell bg={colors.magistral} rowSpan={2}>CONFERENCIA MAGISTRAL: DR. RAFAEL PARDO</Cell>
                                 </TableRow>

                                 {/* ---------- 10:30 - 11:00 (vacía) ---------- */}
                                 <TableRow>
                                    <Cell>10:30 - 11:00 am</Cell>
                                 </TableRow>

                                 {/* ---------- 11:00 - 11:30 ---------- */}
                                 <TableRow>
                                    <Cell>11:00 - 11:30 am</Cell>
                                    <Cell bg={colors.lunch} colSpan={3}>BREAK</Cell>
                                 </TableRow>

                                 {/* ---------- 11:30 - 12:00 ---------- */}
                                 <TableRow>
                                    <Cell>11:30 - 12:00 pm</Cell>
                                    <Cell>PONENCIA T4-01</Cell>
                                    <Cell>PONENCIA T4-10</Cell>
                                    <Cell>PONENCIA T4-09</Cell>
                                 </TableRow>

                                 {/* ---------- 12:00 - 12:30 ---------- */}
                                 <TableRow>
                                    <Cell>12:00 - 12:30 pm</Cell>
                                    <Cell>PONENCIA T4-08</Cell>
                                    <Cell>PONENCIA T4-15</Cell>
                                    <Cell>PONENCIA T4-19</Cell>
                                 </TableRow>

                                 {/* ---------- 12:30 - 13:00 ---------- */}
                                 <TableRow>
                                    <Cell>12:30 - 13:00 pm</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA DR. MIGUEL ESTRADA</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA DR. RONALD GUTIERREZ</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA DR. GUILLERMO LEÓN</Cell>
                                 </TableRow>

                                 {/* ---------- 13:00 - 13:30 (almuerzo 6 filas) ---------- */}
                                 <TableRow>
                                    <Cell>13:00 - 13:30 pm</Cell>
                                    <Cell rowSpan={3} colSpan={8} bg={colors.lunch}>
                                       ALMUERZO LIBRE
                                    </Cell>
                                 </TableRow>

                                 <TableRow>
                                    <Cell>13:30 - 14:00 pm</Cell>
                                 </TableRow>

                                 <TableRow>
                                    <Cell>14:00 - 14:30 pm</Cell>
                                 </TableRow>

                                 {/* 14:30 - 15:00 */}
                                 <TableRow>
                                    <Cell>14:30 - 15:00 pm</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.visit_technique} rowSpan={10}>VISITAS TECNICAS Y TURISTICAS</Cell>
                                 </TableRow>

                                 {/* 15:00 - 15:30 */}
                                 <TableRow>
                                    <Cell>15:00 - 15:30 pm</Cell>
                                    <Cell bg={colors.course} rowSpan={9}>CURSO PRE CONGRESO</Cell>
                                    <Cell bg={colors.course} rowSpan={9}>CURSO PRE CONGRESO</Cell>
                                    <Cell>PONENCIA T4-17</Cell>
                                    <Cell>PONENCIA T4-04</Cell>
                                    <Cell>PONENCIA T4-13</Cell>
                                 </TableRow>

                                 {/* 15:30 - 16:00 */}
                                 <TableRow>
                                    <Cell>15:30 - 16:00 pm</Cell>
                                    <Cell>PONENCIA T4-12</Cell>
                                    <Cell>PONENCIA T4-16</Cell>
                                    <Cell>PONENCIA T4-18</Cell>
                                 </TableRow>

                                 {/* 16:00 - 16:30 */}
                                 <TableRow>
                                    <Cell>16:00 - 16:30 pm</Cell>
                                    <Cell bg={colors.magistral} rowSpan={2}>CONFERENCIA MAGISTRAL: DR. ALEXANDER DE SAVIO</Cell>
                                    <Cell bg={colors.magistral} rowSpan={2}>CONFERENCIA MAGISTRAL: DR. ENRIQUE FERNÁNDEZ</Cell>
                                    <Cell bg={colors.magistral} rowSpan={2}>CONFERENCIA MAGISTRAL: DR. PABLO VILCHEZ</Cell>
                                 </TableRow>

                                 {/* 16:30 - 17:00 */}
                                 <TableRow>
                                    <Cell>16:30 - 17:00 pm</Cell>
                                 </TableRow>

                                 {/* 17:00 - 17:30 */}
                                 <TableRow>
                                    <Cell>17:00 - 17:30 pm</Cell>
                                    <Cell>PONENCIA T2-10</Cell>
                                    <Cell>PONENCIA T4-14</Cell>
                                    <Cell>PONENCIA T4-11</Cell>
                                 </TableRow>

                                 {/* 17:30 - 18:00 */}
                                 <TableRow>
                                    <Cell>17:30 - 18:00 pm</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA DR. JULIO KUROIWA</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA MACAFERRI</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA CEDEP</Cell>
                                 </TableRow>

                                 {/* 18:00 - 18:30 */}
                                 <TableRow>
                                    <Cell>18:00 - 18:30 pm</Cell>
                                    <Cell>PONENCIA T4-06</Cell>
                                    <Cell bg={colors.viii_cona} rowSpan={2}>PLENARIA DESIGNAR ORGANIZADOR VIII CONA</Cell>
                                    <Cell bg={colors.closing} rowSpan={2}>CEREMONIA DE CLAUSURA</Cell>
                                 </TableRow>

                                 {/* 18:30 - 19:00 */}
                                 <TableRow>
                                    <Cell>18:30 - 19:00 pm</Cell>
                                    <Cell>PONENCIA T4-07</Cell>
                                 </TableRow>
                              </TableBody>
                           </Table>
                        </TableContainer>

                        <hr style={{ border: '0px solid #000', boxShadow: '0 0 5px 3px rgba(0,0,0,0.5)', margin: '32px 0' }} />

                        <TableContainer component={Paper} sx={{ maxWidth: 1200, mx: 'auto', mt: 2 }}>

                           <Table size="small">
                              <TableBody>
                                 {/* ---------- header ---------- */}
                                 <TableRow>
                                    <Cell bg={colors.header} rowSpan={3}>HORA</Cell>
                                    <Cell bg={colors.header} colSpan={2}>AUDITORIO FIC - UNICA</Cell>
                                    <Cell bg={colors.header} colSpan={4}>SALA "PRESIDENTES" - HOTEL LAS DUNAS</Cell>
                                 </TableRow>
                                 <TableRow>
                                    <Cell bg={colors.header} colSpan={2}>CURSOS PRE CONGRESO</Cell>
                                    <Cell bg={colors.header} colSpan={4}>VII CONA ICA 2025</Cell>
                                 </TableRow>
                                 <TableRow>
                                    <Cell bg={colors.header}>LUNES 3 NOV</Cell>
                                    <Cell bg={colors.header}>MARTES 4 NOV</Cell>
                                    <Cell bg={colors.header}>MIÉRCOLES 5 NOV</Cell>
                                    <Cell bg={colors.header}>JUEVES 6 NOV</Cell>
                                    <Cell bg={colors.header}>VIERNES 7 NOV</Cell>
                                    <Cell bg={colors.header}>SÁBADO 8 NOV</Cell>
                                 </TableRow>

                                 {/* ---------- 08:00 - 08:30 ---------- */}
                                 <TableRow>
                                    <Cell>08:00 - 08:30 am</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.visit_technique} rowSpan={10}>VISITAS TECNICAS Y TURISTICAS</Cell>
                                 </TableRow>

                                 {/* ---------- 08:30 - 09:00 ---------- */}
                                 <TableRow>
                                    <Cell>08:30 - 09:00 am</Cell>
                                 </TableRow>

                                 {/* ---------- 09:00 - 09:30 ---------- */}
                                 <TableRow>
                                    <Cell>09:00 - 09:30 am</Cell>
                                    <Cell bg={colors.course} rowSpan={8}>CURSO PRE CONGRESO</Cell>
                                    <Cell bg={colors.course} rowSpan={8}>CURSO PRE CONGRESO</Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell>PONENCIA T2-01</Cell>
                                    <Cell>PONENCIA T2-04</Cell>
                                 </TableRow>

                                 {/* ---------- 09:30 - 10:00 (vacía) ---------- */}
                                 <TableRow>
                                    <Cell>09:30 - 10:00 am</Cell>
                                    <Cell>PONENCIA T1-05</Cell>
                                    <Cell>PONENCIA T4-05</Cell>
                                 </TableRow>

                                 {/* ---------- 10:00 - 10:30 ---------- */}
                                 <TableRow>
                                    <Cell>10:00 - 10:30 am</Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                 </TableRow>

                                 {/* ---------- 10:30 - 11:00 (vacía) ---------- */}
                                 <TableRow>
                                    <Cell>10:30 - 11:00 am</Cell>
                                 </TableRow>

                                 {/* ---------- 11:00 - 11:30 ---------- */}
                                 <TableRow>
                                    <Cell>11:00 - 11:30 am</Cell>
                                    <Cell bg={colors.lunch} colSpan={3}>BREAK</Cell>
                                 </TableRow>

                                 {/* ---------- 11:30 - 12:00 ---------- */}
                                 <TableRow>
                                    <Cell>11:30 - 12:00 pm</Cell>
                                    <Cell>PONENCIA T1-01</Cell>
                                    <Cell>PONENCIA T3-05</Cell>
                                    <Cell>PONENCIA T2-06</Cell>
                                 </TableRow>

                                 {/* ---------- 12:00 - 12:30 ---------- */}
                                 <TableRow>
                                    <Cell>12:00 - 12:30 pm</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA CONSEJO DE CUENCA TSI</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA DR. ELIAS TAPIA</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA DRA. MARIA TERESA ORE</Cell>
                                 </TableRow>

                                 {/* ---------- 12:30 - 13:00 ---------- */}
                                 <TableRow>
                                    <Cell>12:30 - 13:00 pm</Cell>
                                    <Cell>PONENCIA T1-03</Cell>
                                    <Cell>PONENCIA T1-02</Cell>
                                    <Cell>PONENCIA T2-07</Cell>
                                 </TableRow>

                                 {/* ---------- 13:00 - 13:30 (almuerzo 6 filas) ---------- */}
                                 <TableRow>
                                    <Cell>13:00 - 13:30 pm</Cell>
                                    <Cell rowSpan={3} colSpan={8} bg={colors.lunch}>
                                       ALMUERZO LIBRE
                                    </Cell>
                                 </TableRow>

                                 <TableRow>
                                    <Cell>13:30 - 14:00 pm</Cell>
                                 </TableRow>

                                 <TableRow>
                                    <Cell>14:00 - 14:30 pm</Cell>
                                 </TableRow>

                                 {/* 14:30 - 15:00 */}
                                 <TableRow>
                                    <Cell>14:30 - 15:00 pm</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.visit_technique} rowSpan={10}>VISITAS TECNICAS Y TURISTICAS</Cell>
                                 </TableRow>

                                 {/* 15:00 - 15:30 */}
                                 <TableRow>
                                    <Cell>15:00 - 15:30 pm</Cell>
                                    <Cell bg={colors.course} rowSpan={9}>CURSO PRE CONGRESO</Cell>
                                    <Cell bg={colors.course} rowSpan={9}>CURSO PRE CONGRESO</Cell>
                                    <Cell>PONENCIA T1-04</Cell>
                                    <Cell>PONENCIA T1-07</Cell>
                                    <Cell>PONENCIA T2-08</Cell>
                                 </TableRow>

                                 {/* 15:30 - 16:00 */}
                                 <TableRow>
                                    <Cell>15:30 - 16:00 pm</Cell>
                                    <Cell>PONENCIA T1-06</Cell>
                                    <Cell>PONENCIA T2-03</Cell>
                                    <Cell>PONENCIA T2-09</Cell>
                                 </TableRow>

                                 {/* 16:00 - 16:30 */}
                                 <TableRow>
                                    <Cell>16:00 - 16:30 pm</Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                 </TableRow>

                                 {/* 16:30 - 17:00 */}
                                 <TableRow>
                                    <Cell>16:30 - 17:00 pm</Cell>
                                 </TableRow>

                                 {/* 17:00 - 17:30 */}
                                 <TableRow>
                                    <Cell>17:00 - 17:30 pm</Cell>
                                    <Cell>PONENCIA T5-01</Cell>
                                    <Cell bg={colors.viii_cona} rowSpan={2}>FORO: LA EXPERIMENTACIÓN Y LA INVESTIGACÓN EN LAS UNIVERSIDADES</Cell>
                                    <Cell bg={colors.viii_cona} rowSpan={2}>FORO: LA INGENIERÍA HIDRÁULICA Y LA 4A REVOLUCIÓN INDUSTRIAL</Cell>
                                 </TableRow>

                                 {/* 17:30 - 18:00 */}
                                 <TableRow>
                                    <Cell>17:30 - 18:00 pm</Cell>
                                    <Cell>PONENCIA T5-02</Cell>
                                 </TableRow>

                                 {/* 18:00 - 18:30 */}
                                 <TableRow>
                                    <Cell>18:00 - 18:30 pm</Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                 </TableRow>

                                 {/* 18:30 - 19:00 */}
                                 <TableRow>
                                    <Cell>18:30 - 19:00 pm</Cell>
                                 </TableRow>
                              </TableBody>
                           </Table>
                        </TableContainer>

                        <hr style={{ border: '0px solid #000', boxShadow: '0 0 5px 3px rgba(0,0,0,0.5)', margin: '32px 0' }} />

                        <TableContainer component={Paper} sx={{ maxWidth: 1200, mx: 'auto', mt: 2 }}>

                           <Table size="small">
                              <TableBody>
                                 {/* ---------- header ---------- */}
                                 <TableRow>
                                    <Cell bg={colors.header} rowSpan={3}>HORA</Cell>
                                    <Cell bg={colors.header} colSpan={2}>AUDITORIO FIC - UNICA</Cell>
                                    <Cell bg={colors.header} colSpan={4}>SALA "LAS DUNAS" - HOTEL LAS DUNAS</Cell>
                                 </TableRow>
                                 <TableRow>
                                    <Cell bg={colors.header} colSpan={2}>CURSOS PRE CONGRESO</Cell>
                                    <Cell bg={colors.header} colSpan={4}>VII CONA ICA 2025</Cell>
                                 </TableRow>
                                 <TableRow>
                                    <Cell bg={colors.header}>LUNES 3 NOV</Cell>
                                    <Cell bg={colors.header}>MARTES 4 NOV</Cell>
                                    <Cell bg={colors.header}>MIÉRCOLES 5 NOV</Cell>
                                    <Cell bg={colors.header}>JUEVES 6 NOV</Cell>
                                    <Cell bg={colors.header}>VIERNES 7 NOV</Cell>
                                    <Cell bg={colors.header}>SÁBADO 8 NOV</Cell>
                                 </TableRow>

                                 {/* ---------- 08:00 - 08:30 ---------- */}
                                 <TableRow>
                                    <Cell>08:00 - 08:30 am</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.register} rowSpan={2}>REGISTRO</Cell>
                                    <Cell bg={colors.visit_technique} rowSpan={10}>VISITAS TECNICAS Y TURISTICAS</Cell>
                                 </TableRow>

                                 {/* ---------- 08:30 - 09:00 ---------- */}
                                 <TableRow>
                                    <Cell>08:30 - 09:00 am</Cell>
                                 </TableRow>

                                 {/* ---------- 09:00 - 09:30 ---------- */}
                                 <TableRow>
                                    <Cell>09:00 - 09:30 am</Cell>
                                    <Cell bg={colors.course} rowSpan={8}>CURSO PRE CONGRESO</Cell>
                                    <Cell bg={colors.course} rowSpan={8}>CURSO PRE CONGRESO</Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell>PONENCIA T3-01</Cell>
                                    <Cell>PONENCIA T4-20</Cell>
                                 </TableRow>

                                 {/* ---------- 09:30 - 10:00 (vacía) ---------- */}
                                 <TableRow>
                                    <Cell>09:30 - 10:00 am</Cell>
                                    <Cell>PONENCIA T5-05</Cell>
                                    <Cell>PONENCIA T5-03</Cell>
                                 </TableRow>

                                 {/* ---------- 10:00 - 10:30 ---------- */}
                                 <TableRow>
                                    <Cell>10:00 - 10:30 am</Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                 </TableRow>

                                 {/* ---------- 10:30 - 11:00 (vacía) ---------- */}
                                 <TableRow>
                                    <Cell>10:30 - 11:00 am</Cell>
                                 </TableRow>

                                 {/* ---------- 11:00 - 11:30 ---------- */}
                                 <TableRow>
                                    <Cell>11:00 - 11:30 am</Cell>
                                    <Cell bg={colors.lunch} colSpan={3}>BREAK</Cell>
                                 </TableRow>

                                 {/* ---------- 11:30 - 12:00 ---------- */}
                                 <TableRow>
                                    <Cell>11:30 - 12:00 pm</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA</Cell>
                                    <Cell bg={colors.technique}>CONFERENCIA TÉCNICA</Cell>
                                 </TableRow>

                                 {/* ---------- 12:00 - 12:30 ---------- */}
                                 <TableRow>
                                    <Cell>12:00 - 12:30 pm</Cell>
                                    <Cell>PONENCIA T2-50</Cell>
                                    <Cell>PONENCIA T3-06</Cell>
                                    <Cell>PONENCIA T5-04</Cell>
                                 </TableRow>

                                 {/* ---------- 12:30 - 13:00 ---------- */}
                                 <TableRow>
                                    <Cell>12:30 - 13:00 pm</Cell>
                                    <Cell>PONENCIA T2-11</Cell>
                                    <Cell>PONENCIA T3-07</Cell>
                                    <Cell>PONENCIA T3-11</Cell>
                                 </TableRow>

                                 {/* ---------- 13:00 - 13:30 (almuerzo 6 filas) ---------- */}
                                 <TableRow>
                                    <Cell>13:00 - 13:30 pm</Cell>
                                    <Cell rowSpan={3} colSpan={8} bg={colors.lunch}>
                                       ALMUERZO LIBRE
                                    </Cell>
                                 </TableRow>

                                 <TableRow>
                                    <Cell>13:30 - 14:00 pm</Cell>
                                 </TableRow>

                                 <TableRow>
                                    <Cell>14:00 - 14:30 pm</Cell>
                                 </TableRow>

                                 {/* 14:30 - 15:00 */}
                                 <TableRow>
                                    <Cell>14:30 - 15:00 pm</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.register}>REGISTRO</Cell>
                                    <Cell bg={colors.visit_technique} rowSpan={10}>VISITAS TECNICAS Y TURISTICAS</Cell>
                                 </TableRow>

                                 {/* 15:00 - 15:30 */}
                                 <TableRow>
                                    <Cell>15:00 - 15:30 pm</Cell>
                                    <Cell bg={colors.course} rowSpan={9}>CURSO PRE CONGRESO</Cell>
                                    <Cell bg={colors.course} rowSpan={9}>CURSO PRE CONGRESO</Cell>
                                    <Cell>PONENCIA T3-02</Cell>
                                    <Cell>PONENCIA T3-08</Cell>
                                    <Cell></Cell>
                                 </TableRow>

                                 {/* 15:30 - 16:00 */}
                                 <TableRow>
                                    <Cell>15:30 - 16:00 pm</Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                    <Cell rowSpan={2}></Cell>
                                 </TableRow>

                                 {/* 16:00 - 16:30 */}
                                 <TableRow>
                                    <Cell>16:00 - 16:30 pm</Cell>
                                 </TableRow>

                                 {/* 16:30 - 17:00 */}
                                 <TableRow>
                                    <Cell>16:30 - 17:00 pm</Cell>
                                    <Cell>PONENCIA T3-03</Cell>
                                    <Cell>PONENCIA T3-09</Cell>
                                    <Cell></Cell>
                                 </TableRow>

                                 {/* 17:00 - 17:30 */}
                                 <TableRow>
                                    <Cell>17:00 - 17:30 pm</Cell>
                                    <Cell>PONENCIA T3-04</Cell>
                                    <Cell>PONENCIA T3-10</Cell>
                                    <Cell></Cell>
                                 </TableRow>

                                 {/* 17:30 - 18:00 */}
                                 <TableRow>
                                    <Cell>17:30 - 18:00 pm</Cell>
                                    <Cell rowSpan={3}></Cell>
                                    <Cell rowSpan={3}></Cell>
                                    <Cell rowSpan={3}></Cell>
                                 </TableRow>

                                 {/* 18:00 - 18:30 */}
                                 <TableRow>
                                    <Cell>18:00 - 18:30 pm</Cell>
                                 </TableRow>

                                 {/* 18:30 - 19:00 */}
                                 <TableRow>
                                    <Cell>18:30 - 19:00 pm</Cell>
                                 </TableRow>
                              </TableBody>
                           </Table>
                        </TableContainer>
                     </Box>
                  </Grid>
               </Grid>
            </Box>
         </div>
      </div>
   );
}