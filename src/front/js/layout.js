import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

//Componentes
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//Views
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import Galeria from "./pages/galeria";

//Vistas Cuidador
import RegistroCuidador from "./pages/registroCuidador";
import { PerfilPrivado } from "./pages/perfilPrivado";
import EditarCuidador from "./pages/editarCuidador";
import { PerfilCuidadorPublico } from "./pages/perfilCuidadorPublico";

import Todoscuidadores from "./pages/todoscuidadores";

//Vistas Cliente/Dueño
import RegistroCliente from "./pages/registroCliente";
import { PerfilCliente } from "./pages/perfilCliente";
import { EditarCliente } from "./pages/editarCliente";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/todoscuidadores"   element={<Todoscuidadores />}/>   
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/galeria" element={<Galeria />}/>
            <Route exact path="/registroCuidador"   element={<RegistroCuidador />}/>
            <Route exact path="/editarCuidador/:id"element={<EditarCuidador />}/>
            <Route exact path="/registroCliente"element={<RegistroCliente />}/>
            <Route exact path="/perfilCuidadorPublico/:id"element={<PerfilCuidadorPublico />}/>
            <Route exact path="/perfilPrivado/:id"element={<PerfilPrivado />}/>
            <Route exact path="/registroCliente"  element={<RegistroCliente />}/>
            <Route exact path="/perfilCliente/:id" element={<PerfilCliente />}/>
            <Route exact path="/editarCliente/:id" element={<EditarCliente />}/>
            {/* <Route>
              <h1>Not found!</h1>
            </Route> */}
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
