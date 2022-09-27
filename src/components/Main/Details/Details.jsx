import React, { Component, useState } from "react";
import {useParams} from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';
import axios from 'axios'


const Details = () => {

  let { id } = useParams();

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  let name = Number(id) + 1


  // const { loading, result } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  async function fetchPokemon(){
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          const res2 = await axios.get(`${res.data.forms[0].url}`)          
          const pokdata = {
            Id: res.data.id,
            Name: res.data.name,
            Img: res.data.sprites.other.dream_world,
            TypeOne: res2.data.types[0].type.name
          }     
          setLoading(false) 
          if (res2.data.types.length>1) {
            pokdata.TypeTwo = res2.data.types[1].type.name
          }
          else{
            pokdata.TypeTwo = "No type 2"
          }
          setData(pokdata)
  }
  fetchPokemon()


    return <div className="detail">
  
      {loading?null:<p>Pokemon nº: {data.Id}</p>}

      {loading?null:<h5>Nombre: {data.Name}</h5>}

    {loading?null:<img src={data.Img.front_default} alt="Pokemon Image" />}

    {loading?null:<p>Tipo 1: {data.TypeOne}</p>}
    {loading?null:<p>Tipo 2: {data.TypeTwo}</p>}

    </div>;
  }


export default Details;
