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
    async function fetchPokemon() {
      if (data.length === 0) {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          setData(res)
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

          arrData = [data]
          let arrConcat = arrData.concat(res)

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
