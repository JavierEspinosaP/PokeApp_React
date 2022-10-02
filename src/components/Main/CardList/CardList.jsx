import React, { useState, useEffect, useContext } from "react";
import { pokeContext } from '../../../context/pokeContext';
import Card from './Card'
import axios from 'axios'
import { useDebouncedCallback } from 'use-debounce';
import Swal from 'sweetalert2'



const Main = () => {

  const [pokemon, setPokemon] = useState('')
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line
  const {setData, data} = useContext(pokeContext) 

  useEffect(() => {


    if (pokemon !== "") {
    async function fetchPokemon() {
      if (data.length === 0) {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          const res2 = await axios.get(`${res.data.forms[0].url}`)          
          const pokdata = {
            Id: res.data.id,
            Name: res.data.name,
            Img: res.data.sprites.other.dream_world.front_default,
            TypeOne: res2.data.types[0].type.name
          }  

          if (res2.data.types.length>1) {
            pokdata.TypeTwo = res2.data.types[1].type.name
          }
          setData(pokdata)
          setLoading(true)
        }
        catch (err) {
          Swal.fire({
            title: `El pokemon que estas buscando no existe!`,
            icon: 'error',
            confirmButtonText: 'Entiendo...'
          })
        }
      } else {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          const res2 = await axios.get(`${res.data.forms[0].url}`)
          const pokdata = {
            Id: res.data.id,
            Name: res.data.name,
            Img: res.data.sprites.other.dream_world.front_default,
            TypeOne: res2.data.types[0].type.name
          }        


          if (res2.data.types.length>1) {
            pokdata.TypeTwo = res2.data.types[1].type.name
          }

          let arrConcat = [data].concat(pokdata)
          let arrTotal = arrConcat.flat()

          setData(arrTotal)
          setLoading(true)
        }
        catch (err) {
          Swal.fire({
            title: `El pokemon que estas buscando no existe!`,
            icon: 'error',
            confirmButtonText: 'Entiendo...'
          })
        }
      }
      ;
    }
    fetchPokemon()      
    }

  // eslint-disable-next-line
  }, [pokemon]);


  const debounced = useDebouncedCallback(
    (value) => {
    
      setPokemon(value.toLowerCase())
    }, 1500
  )

  return (<div className="main">

    <div id="searchView">
      <div id="searchContainer">
      <h1 htmlFor="search">Buscar Pokemon</h1>
      <input type="text" name="search" id="search" onChange={(e) => debounced(e.target.value)} />        
      </div>
      <div id="cardContainer">{loading ? <Card  /> : null} 
      </div>
     
    </div>

  </div>)
}


export default Main;
