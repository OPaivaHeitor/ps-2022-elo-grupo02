import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Home() {

    const estiloLink = {
        margin: "1rem",
        textDecoration: "none",
        color: "white",
    }


    return(
        <div>
            <h1>Home</h1>
            <button className="btn"><Link to="/api" style={estiloLink}>Api</Link></button>
        </div>
    )
}