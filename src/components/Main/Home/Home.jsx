import React from "react";
import useFetch from '../../../hooks/useFetch';
import { Link } from "react-router-dom";
import cardImg from '../../../assets/card.jpg';
import Spinner from '../../../assets/spinner.png'


const Home = () => {



  const { loading, result } = useFetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');

  return <div className="home">
    {loading?null:<div id="h1"><h1 >Todos los pokemons</h1></div>}
    <section className="home">
      {loading ? <div id="spinnerContainer">
        <img id="spinnerHome" src={Spinner} alt="spinner" /></div> : result.results.map((pokemon, i) =>
        <div className="cardContainer"><Link id="pokemonName" to={'/pokemon/'+i}><img id="cardImg" src={cardImg} alt=""></img><h3>{pokemon.name}</h3></Link></div>
      )}

    </section>
  </div>
}


export default Home;
