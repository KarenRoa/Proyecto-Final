import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="container text-center mt-5">
      <div className="row ">
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
         
        </div>
      

        
      </div>
    </div>
  );
};
