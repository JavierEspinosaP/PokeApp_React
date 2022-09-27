import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required().min(3),
  id: yup.number().positive().integer().required(),
  img: yup.string().required()
}).required();

const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

    return <div className="formContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id">Id:</label>
      <input type="text" {...register("id", {required: true} )}/>
      <p>{errors.id?.message}</p>
      <label htmlFor="name">Nombre:</label>
      <input type="text" {...register("name", {min: 3, required: true})}/>
      <p>{errors.name?.message}</p>
      <label htmlFor="image">Imagen:</label>
      <input type="text" {...register("img", {required: true})}/>
      <label htmlFor="typeOne">Tipo 1:</label>
      <select name="typeOne" {...register("typeOne", {required: true})} aria-invalid={errors.img ? "true" : "false"}>
        <option value="agua">Agua</option>
        <option value="eléctrico">Eléctrico</option>
        <option value="fuego">Fuego</option>
        <option value="hielo">Hielo</option>
        <option value="planta">Planta</option>
        <option value="tierra">Tierra</option>
        <option value="veneno">Veneno</option>
        <option value="volador">Volador</option>
      </select>
      {errors.typeOne?.type === 'required' && <p role="alert">Type is required</p>}
      <label htmlFor="typeTwo">Tipo 2:</label>
      <select name="typeTwo" {...register("typeTwo")}>
        <option value="agua">Agua</option>
        <option value="eléctrico">Eléctrico</option>
        <option value="fuego">Fuego</option>
        <option value="hielo">Hielo</option>
        <option value="planta">Planta</option>
        <option value="tierra">Tierra</option>
        <option value="veneno">Veneno</option>
        <option value="volador">Volador</option>        
      </select>

      <input type="submit" />
      </form>
    </div>;
  }


export default Form;
