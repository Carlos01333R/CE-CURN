
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

import { StickyScrollRevealDemo } from './pages/ConsultoriosEmpresariales'
import { Asesorias } from './pages/Asesoria'
import { Consultorias } from './pages/Consultorias'
import { GestionPreyectos } from './pages/GestionPreyecto'
import { EmprendimientoInnovacion } from './pages/Empredimiento'
import PageAsesores from './pages/Asesores'


function App() {
 
  return (
  
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/asesores' element={<PageAsesores/>}/>
  <Route path='/consultoriospage' element={<StickyScrollRevealDemo/>}/>
  <Route path='/asesoria' element={<Asesorias/>} />
  <Route path='/consultoria' element={<Consultorias/>} />
  <Route path='/gestion' element={<GestionPreyectos/>} />
  <Route path='/empredimiento' element={<EmprendimientoInnovacion/>} />

 </Routes>

  )
}

export default App
