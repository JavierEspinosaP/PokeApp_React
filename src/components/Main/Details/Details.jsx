import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../../../assets/spinner.png'


const Details = () => {

  let { id } = useParams();

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  let name = Number(id) + 1


  // const { loading, result } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  async function fetchPokemon() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const res2 = await axios.get(`${res.data.forms[0].url}`)
    const res3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/encounters`)

    const pokdata = {
      Id: res.data.id,
      Name: res.data.name,
      Img: res.data.sprites.other.dream_world,
      TypeOne: res2.data.types[0].type.name,
      Stats: res.data.stats,
      Games: res.data.game_indices,
      Zones: res3.data
    }
    setLoading(false)
    if (res2.data.types.length > 1) {
      pokdata.TypeTwo = res2.data.types[1].type.name
    }
    else {
      pokdata.TypeTwo = "No type 2"
    }
    setData(pokdata)
    // console.log(res);
  }
  fetchPokemon()


  return <div className="detail">

    <div id="cardContainerDetail">
      {loading ? null : <p>Pokemon nº: {data.Id}</p>}
      {loading ? null : <h2>{data.Name}</h2>}
      {loading ? <img className="spinner" src={Spinner} alt="spinner" /> : <div id="imgContainerDetail"><img id="imgDetail" src={data.Img.front_default} alt={"Img"+data.Id} /></div>}
      {loading ? null : <p>Tipo 1: {data.TypeOne}</p>}
      {loading ? null : <p>Tipo 2: {data.TypeTwo}</p>}
    </div>
    <div id="statsContainer">
    {loading ? null : <h2>Stats</h2>}

    {loading ? <img className="spinner" src={Spinner} alt="spinner" /> : data.Stats.map(s => (<div><p>{s.stat.name}: {s.base_stat}</p></div>))}
    </div>

    <div id="gamesContainer">
    {loading ? null : <h2>Algunos juegos en los que aparece</h2>}
    {loading ? <img className="spinner" src={Spinner} alt="spinner" /> : data.Games.map(g => (<div><p>- {g.version.name}</p></div>)).slice(0,6)}
    </div>

    <div id="zonesContainer">
    {loading ? null : <h2>Algunas zonas en las que puede aparecer</h2>}
    {loading ? <img className="spinner" src={Spinner} alt="spinner" /> : data.Zones.map(z => (<div><p>- {z.location_area.name}</p></div>)).slice(0,6)}

    </div>

  </div>;
}


export default Details;
