import React, { useContext, useState, useEffect } from "react";
import {Route, Navigate, useLocation} from "react-router-dom";
import { Context } from "../store/appContext";

const PrivateRoute  = ({ children }) =>{
  const { store, actions } = useContext(Context)
  

    return store.datosTokenCuidador?.token ? children : <Navigate to="/" />

}

export default PrivateRoute