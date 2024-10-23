import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Expertos from "./pages/Expertos";
import Consulta from "./pages/Consulta";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Dataform from "./pages/Dataform";
import Datacitas from "./pages/Datacitas";

const Main = () => {
  return(
    <main className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/expertos' element={<Expertos />} />
          <Route path='/consulta' element={<Consulta />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dataform' element={<Dataform />} />
          <Route path='/datacitas' element={<Datacitas />} />
        </Routes>
    </main>
  )
}

export default Main;
