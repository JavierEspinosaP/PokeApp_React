import React from "react";
import { Link } from "react-router-dom";
import Player from './Player'

const Nav = () => {

    return <div className="nav">
      <Link className="nav-link" to='/'>Home</Link>
      <Link className="nav-link" to='/new'>Crea tu pokemon</Link>
      <Link className="nav-link" to='/search'>Buscar pokemons</Link>
      <Player/>
    </div>;
  }


export default Nav;
