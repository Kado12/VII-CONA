import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

// * Pages
import Home from './pages/Home'
import Inscriptions from './pages/Inscriptions'
import Committe from './pages/Committe'
import ThematicAxes from './pages/ThematicAxes'
import Schedule from './pages/Schedule'
import Seat from './pages/Seat'
import Events from './pages/Events'
import Summary from './pages/Summary'

// * Components
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Box component="main" sx={{ minHeight: 'calc(100vh - 120px)', pt: 8 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inscriptions" element={<Inscriptions />} />
            <Route path="/committe" element={<Committe />} />
            <Route path="/thematic-axes" element={<ThematicAxes />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/seat" element={<Seat />} />
            <Route path="/news-events" element={<Events />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </>
  )
}

export default App
