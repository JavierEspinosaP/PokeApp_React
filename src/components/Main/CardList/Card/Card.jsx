import React, { useContext } from "react";
import { pokeContext } from '../../../../context/pokeContext';
import { Link } from "react-router-dom";

const Card = () => {
const {data} = useContext(pokeContext)


let pokData = [data].flat()
console.log(pokData);

    return(

      pokData.map( d=>(
    <div className="card">
     {d.Id?<p>Pokemon nº: {d.Id}</p>:null}
     {d.Name?<h5>Nombre: {d.Name}</h5>:null}
     {d.Img?<div id="imgContainer"><img src={d.Img} alt="Image" /></div>:null}     
     {d.TypeOne?<p>Tipo 1: {d.TypeOne}</p>:null}
     {d.TypeTwo?<p>Tipo 2: {d.TypeTwo}</p>:null}
     <Link to={'/pokemon/'+ (Number(d.Id)-1)}><p>Vista detalle de {d.Name}</p></Link>
      </div>))

    )
  }

export default Card;
