import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./stylehg.css";


export function Home() {
  return (
    <html>
      <head>
        <meta charset="UTF-8"></meta>
        <title>Elo Dog</title>
        <link rel="stylesheet" href="stylehg.css"></link>
        </head>
        <body>
            <header>
            <div class="caixa">
                    <h1>
                        <img src={require('./logoss.png')}/>
                        <div class="titulo">
                          <p>Elo Dog</p>
                        </div>
                    </h1>
                    
                    
                        <ul >
                          <button class="botaoo"><Link to="/">Home</Link></button>
                        </ul>
                    
            </div>
            </header>
            <main>
            <ul class="enunciado">
                        <li>
                            <h2>Motivos para adotar um pet</h2>
                            <p>
                                1 - Ter um cachorro em casa fará bem tanto para você quanto para ele.<br/><br/>
                                2 - Você se sentira mais motivado em sair para caminhar se sempre tiver um companheiro para isso.<br/><br/>
                                3 - Como os pets de rua estão vulneráveis a diversos tipos de maus-tratos, ao adotar, você estará garantindo uma melhor qualidade de vida à ele.<br/><br/>
                                4 - Muito companheiros! Já ouviu a frase: “O cão é o melhor amigo do homem”, realmente, é real!<br/>
                            </p>
                            <li>
                            
                            </li>
                        </li>
                </ul>
            </main>
            <div class="imaagem"><img src={require('./imagem1.jpg')}/></div>
            <footer>
              <button class="botao">
                <Link to="api">Encontre seu cão</Link>
              </button>
              </footer>
      </body>
    </html>
  );
}