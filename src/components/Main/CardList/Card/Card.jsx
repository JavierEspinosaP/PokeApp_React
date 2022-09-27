import React, { useContext } from "react";
import { pokeContext } from '../../../../context/pokeContext';

const Card = () => {
const {data} = useContext(pokeContext)

let pokData = [data].flat()

// let paintCard = pokData.slice(1)
let dataCard = []
// paintCard.map(p=>{
//   if(!p.data.count){
//     dataCard.push(p)
// }
// })
    return(

      pokData.map( d=>(
    <div className="card">
     {d.Id?<p>Nº{d.Id}</p>:null}
     {d.Name?<p>Nombre: {d.Name}</p>:null}
     {d.TypeOne?<p>Tipo 1: {d.TypeOne}</p>:null}
     {d.TypeTwo?<p>Tipo 2: {d.TypeTwo}</p>:null}
     {d.Img.front_default?<img src={d.Img.front_default} />:null}
      </div>))
    )
  }

export default Card;
