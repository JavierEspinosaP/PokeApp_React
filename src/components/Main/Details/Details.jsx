import React, { Component } from "react";
import {useParams} from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';


const Details = () => {

  let { id } = useParams();

  let name = Number(id) + 1

  const { loading, result } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    return <div className="detail">
      <h1>{result.name}</h1>
      {loading?null:<p>Pokemon nº: {result.id}</p>}

      {loading?null:<h5>Peso: {result.weight}kg</h5>}

    {loading?null:<img src={result.sprites.front_default} alt="Pokemon Image" />}

    </div>;
  }


export default Details;
