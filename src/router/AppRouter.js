import React from 'react'
import {
    HashRouter as Router,
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";
import PaginaPrincipal from '../components/PaginaPrincipal';
import { PaginaForm } from '../components/PaginaForm';


export const AppRouter = () => {
    return (
       <Router>
            <Routes>
                <Route  path="/" element={<PaginaPrincipal/>} /> 
                <Route exact path="/form" element={<PaginaForm/>}/>
                <Route path="*" element={<Navigate replace to= "/"/>}/>
            </Routes>
        </Router>  
      );
}
