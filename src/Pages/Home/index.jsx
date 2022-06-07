import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Home() {
  return (
    <div>
      <h1 className="title">ELO DOG</h1>
      <div className="Box">
        <div className="container borda-azul">
          <p className="parágrafo borda-azul">
            {" "}
            <span>O cão </span>acompanha já acompanha a humanidade a milhares de
            anos, isso com certeza tem um motivo, por que não tentar criar um
            laço com o melhor amigo do homem e ver com os próprios olhos a
            alegria que esse animalzinho ao seu lado pode te proporcionar.{" "}
          </p>
          <h1 className="header">Motivos para adotar um pet</h1>
        </div>
        <div className="container">
          {" "}
          <Link to="/api" className="link">
            Aperte aqui para achar um doguinho que combina contigo
          </Link>{" "}
        </div>
      </div>

      {/* <div className="container">
                
            </div> */}
    </div>
  );
}
