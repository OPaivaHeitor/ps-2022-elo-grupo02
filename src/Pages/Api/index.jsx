import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Api(){
    const [data, setData] = useState({})
    
    const refreshPage = ()=>{
        window.location.reload();
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://dog.ceo/api/breeds/image/random"
                )
            setData(response.data["message"])
        }
        fetchData()
        console.log("oi")
    },[])

    return(
        <div>
            <div className='imagem'>
                <img src={data} />
            </div>
            <button onClick={refreshPage} className="btn">Recarregar</button>
            <Link to ="/" className='link'>Home</Link>
        </div>
    )
}