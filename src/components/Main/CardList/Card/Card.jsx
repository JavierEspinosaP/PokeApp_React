import React, { useContext } from "react";
import { pokeContext } from '../../../../context/pokeContext';
import { Link } from "react-router-dom";
import uuid4 from "uuid4";


const Card = () => {
const {data} = useContext(pokeContext)
let pokData = [data].flat()
let urlImg = "https://raw"

    return(

      pokData.map( d=>(

    <div key={uuid4()} className="card">
     {d.Id?<p>Pokemon nº: {d.Id}</p>:null}
     {d.Name?<h5>Nombre: {d.Name}</h5>:null}
     {d.Img?<div className="imgContainer"><img src={d.Img} alt={"Image"+d.Id} /></div>:null}     
     {d.TypeOne?<p>Tipo 1: {d.TypeOne}</p>:null}
     {d.TypeTwo?<p>Tipo 2: {d.TypeTwo}</p>:null}
     {d.Img.slice(0,11) === urlImg ?<Link to={'/pokemon/'+ (Number(d.Id)-1)}><p>Vista detalle de {d.Name}</p></Link>:null}
      </div>))

    )
  }

export default Card;
