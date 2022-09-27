import React, { Component } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return <div className="nav">
      <Link className="nav-link" to='/'>Home</Link>
      <Link className="nav-link" to='/new'>Crea tu pokemon</Link>
      <Link className="nav-link" to='/search'>Buscar pokemons</Link>
      {/* <Link className="nav-link" to='/pokemon/:id'>Detalle de pokemon</Link> */}
    </div>;
  }


export default Nav;
