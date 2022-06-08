import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

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
          <ul>
            <li className="list">
              <span>1. </span>Ter um cachorro em casa fará bem tanto para você quanto para ele.
            </li>
            <li className="list">
            <span>2. </span>Você se sentira mais motivado em sair para caminhar se sempre
              tiver um companheiro para isso.
            </li>
            <li className="list">
            <span>3. </span>Como os pets de rua estão vulneráveis a diversos tipos de
              maus-tratos, ao adotar, você estará garantindo uma melhor
              qualidade de vida à ele.
            </li>
            <li className="list">
            <span>4. </span>Muito companheiros!Já ouviu a frase: “O cão é o melhor amigo do
              homem” , realmente, é real!{" "}
            </li>
          </ul>
        </div>
        <div className="container">
          {" "}
          <Link to="/api" className="link">
            Aperte aqui para achar um doguinho que combina contigo
          </Link>{" "}
        </div>
      </div>

    </div>
  );
}
