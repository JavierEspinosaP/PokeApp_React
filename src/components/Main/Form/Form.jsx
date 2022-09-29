import React, { useContext } from "react";


import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {pokeContext} from '../../../context/pokeContext'


const schema = yup.object({
  Name: yup.string().required().min(3),
  Id: yup.number().positive().integer().required(),
  Img: yup.string().required()
}).required();

let arrData

const regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\.~#?&\/=]*)$/

const Form = () => {

  const { setData, data } = useContext(pokeContext)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  arrData = [data]
  const onSubmit = dataForm => setData([...arrData, dataForm]);

  const imgError = "The image would be a valid url"
  const idError = "The id must be positive and integer number"

  

    return <div className="formContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Id">Id:</label>
      <input type="text" {...register("Id", {required: true} )}/>
      <p>{errors.Id?idError:null}</p>
      <label htmlFor="Name">Nombre:</label>
      <input type="text" {...register("Name", {min: 3, required: true})}/>
      <p>{errors.Name?.message}</p>
      <label htmlFor="Img">Imagen:</label>
      <input type="text" {...register("Img", {required: true, pattern: regex})}/>
      <p>{errors.Img?imgError: null}</p>
      <label htmlFor="TypeOne">Tipo 1:</label>
      <select name="TypeOne" {...register("TypeOne", {required: true})} aria-invalid={errors.img ? "true" : "false"}>
        <option value="agua">Agua</option>
        <option value="eléctrico">Eléctrico</option>
        <option value="fuego">Fuego</option>
        <option value="hielo">Hielo</option>
        <option value="planta">Planta</option>
        <option value="tierra">Tierra</option>
        <option value="veneno">Veneno</option>
        <option value="volador">Volador</option>
      </select>
      {errors.TypeOne?.type === 'required' && <p role="alert">Type is required</p>}
      <label htmlFor="TypeTwo">Tipo 2:</label>
      <select name="TypeTwo" {...register("TypeTwo")}>
        <option value=""></option>
        <option value="agua">Agua</option>
        <option value="eléctrico">Eléctrico</option>
        <option value="fuego">Fuego</option>
        <option value="hielo">Hielo</option>
        <option value="planta">Planta</option>
        <option value="tierra">Tierra</option>
        <option value="veneno">Veneno</option>
        <option value="volador">Volador</option>        
      </select>

      <input type="submit" id="submit" />
      </form>

    </div>;
  }


export default Form;

