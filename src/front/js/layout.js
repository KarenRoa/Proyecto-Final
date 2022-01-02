import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import RegistroCuidador from "./pages/registroCuidador";
import RegistroCliente from "./pages/registroCliente";
import { PerfilPrivado } from "./pages/perfilPrivado";

import fondo from "../img/bg.jpg";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
<<<<<<< HEAD
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
            <Route exact path="/registroCuidador">
              <RegistroCuidador />
            </Route>
            <Route exact path="/registroCliente">
              <RegistroCliente />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/perfilPrivado/:theid">
              <PerfilPrivado />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
=======
    <div
      id="contenedor"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
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
              <Route exact path="/login">
                <Login />
              </Route>
              <Route>
                <h1>Not found!</h1>
              </Route>
            </Switch>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
>>>>>>> 078cbf69ba670703942c4a12418db26ded10fbfb
    </div>
  );
};

export default injectContext(Layout);
