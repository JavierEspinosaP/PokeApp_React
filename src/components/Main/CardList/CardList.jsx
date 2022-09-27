import React, { useState, useEffect, useContext } from "react";
import { pokeContext } from '../../../context/pokeContext';
import Card from './Card'
import axios from 'axios'
import { useDebouncedCallback } from 'use-debounce';
import Swal from 'sweetalert2'


const Main = () => {

  const [pokemon, setPokemon] = useState('')
  const [loading, setLoading] = useState(false)
  const { setData, data } = useContext(pokeContext)
  let arrData

  useEffect(() => {
    if (pokemon != "") {
    async function fetchPokemon() {
      if (data.length === 0) {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          const res2 = await axios.get(`${res.data.forms[0].url}`)          
          const pokdata = {
            Id: res.data.id,
            Name: res.data.name,
            Img: res.data.sprites.other.dream_world,
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
          console.log(res.data.forms[0].url);
          const res2 = await axios.get(`${res.data.forms[0].url}`)
          const pokdata = {
            Id: res.data.id,
            Name: res.data.name,
            Img: res.data.sprites.other.dream_world,
            TypeOne: res2.data.types[0].type.name
          }        


          if (res2.data.types.length>1) {
            pokdata.TypeTwo = res2.data.types[1].type.name
          }
          arrData = [data]
          let arrConcat = arrData.concat(pokdata)
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


  }, [pokemon]);


  const debounced = useDebouncedCallback(
    (value) => {
    
      setPokemon(value)
    }, 1500
  )
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setPokemon(e.target.search.value)
  //   setLoading(false)
  // };



  return (<div className="main">

    <div>
      <p htmlFor="search">Buscar Pokemon</p>
      <input type="text" name="search" id="search" onChange={(e) => debounced(e.target.value)} />
      <div id="cardContainer">{loading ? <Card /> : null}
      </div>
    </div>

  </div>)
}


export default Main;