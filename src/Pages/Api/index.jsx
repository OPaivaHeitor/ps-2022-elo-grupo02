import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./api.css";

export function Api() {
  const [data, setData] = useState({});
  const [breed, setBreed] = useState([]);

  const refreshPage = () => {
    window.location.reload();
  };

  const fetchData = async () => {
    const response = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    setData(response.data["message"]);
    let imageText = response.data["message"];
    setBreed(imageText.substring(30, 60).split("/")[0]);
    console.log(imageText.substring(30, 60).split("/")[0]);
  };

  const updateResult = () => {
    const inputValue = document.querySelector(".input").value
    const fetchData = async () => {
      
      try {
        const response = await axios.get(
          `https://dog.ceo/api/breed/${inputValue}/images/random`
        );
        setData(response.data["message"]);
        let imageText = response.data["message"];
        setBreed(imageText.substring(30, 60).split("/")[0]);
        console.log(imageText.substring(30, 60).split("/")[0]);
      } catch (error) {
          alert("Raça inválida!")
      }

 
    };
    fetchData();
  };

  useEffect(() => {
    fetchData();
    console.log(breed);
    console.log("oi");
  }, []);

  return (
    <div>
      <div className="imagem">
        <img src={data} width={500} height={500} />
      </div>
      <div className="botoes">
      <button onClick={fetchData} className="btn">
        Quero ver outro dog!
      </button>
      <Link to="/" className="btn">
        Voltar para Home
      </Link>
      </div>
      <div className="searchBar">
        <input
          className="input"
          type="text"
          placeholder="Procure por uma raça"
        ></input>
        <button onClick={updateResult} class="btn2">Pesquisar</button>
      </div>
      <div className="raca">
      <p>Raça: {breed}</p>
      </div>
    </div>
  );
}
