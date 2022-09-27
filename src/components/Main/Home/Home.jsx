import React from "react";
import useFetch from '../../../hooks/useFetch';
import { Link } from "react-router-dom";
import cardImg from '../../../assets/card.jpg'


const Home = () => {

  const { loading, result } = useFetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');

  return <div className="home">
    <div id="h1"><h1 >Todos los pokemons</h1></div>
    <section className="home">
      {loading ? "" : result.results.map((pokemon, i) =>
        <div className="cardContainer"><Link id="pokemonName" to={'/pokemon/'+i}><img id="cardImg" src={cardImg} alt=""></img><h3 id={pokemon[i]}>{pokemon.name}</h3></Link></div>
      )}

    </section>
  </div>
}


export default Home;