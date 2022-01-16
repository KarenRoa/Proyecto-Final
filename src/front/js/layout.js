import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import { LoginCuidador } from "./pages/loginCuidador";

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
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/todoscuidadores">
              <Todoscuidadores />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/loginCuidador">
              <LoginCuidador />
            </Route>
            <Route exact path="/galeria">
              <Galeria/>
            </Route>
            <Route exact path="/registroCuidador">
              <RegistroCuidador />
            </Route>
            <Route exact path="/editarCuidador/:id">
              <EditarCuidador />
            </Route>
            <Route exact path="/registroCliente">
              <RegistroCliente />
            </Route>
            <Route exact path="/perfilCuidadorPublico/:id">
              <PerfilCuidadorPublico />
            </Route>
            <Route exact path="/perfilPrivado/:id">
              <PerfilPrivado />
            </Route>
            <Route exact path="/registroCliente">
              <RegistroCliente />
            </Route>
            <Route exact path="/perfilCliente/:id">
              <PerfilCliente />
            </Route>
            <Route exact path="/editarCliente/:id">
              <EditarCliente />
            </Route>

            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
