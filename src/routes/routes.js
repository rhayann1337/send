import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from '../pages/Home'
import RegistroColaborador from "../pages/RegistroColaborador";
import RegistroUsuario from "../pages/RegistroUsuario";
import RegistroAdministrador from "../pages/RegistroAdministrador";

const Routes = () => {
   return(
       <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { RegistroColaborador }  path="/cadastro-colaborador" exact />
            <Route component = { RegistroUsuario }  path="/cadastro" exact />
            <Route component = { RegistroAdministrador }  path="/cadastro-adm" exact />
       </BrowserRouter>
   )
}

export default Routes;