import React, { useContext } from "react";
import { pokeContext } from '../../../../context/pokeContext';

const Card = () => {
const {data} = useContext(pokeContext)
let pokData = [data].flat()
let paintCard = pokData.slice(1)
let dataCard = []
paintCard.map(p=>{
  if(!p.data.count){
    dataCard.push(p)
}
})
    return(
      dataCard.map( d=>(
    <div className="card">
     {d.data.id?<p>Nº{d.data.id}</p>:null}
     {d.data.name?<p>Nombre: {d.data.name}</p>:null}
     {d.data.weight?<p>Peso: {d.data.weight}kg</p>:null}
     {d.data.sprites.front_default?<img src={d.data.sprites.front_default} />:null}
      </div>))
    )
  }

export default Card;
