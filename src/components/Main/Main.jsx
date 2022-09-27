import React, { Component } from "react";
import CardList from "./CardList";
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import Details from './Details'

const Main = () => {

  

    return <main>
      <Routes>
        <Route element={<Home/>} path={"/"}/>        
        <Route element={<CardList/>} path={"/search"}/>
        <Route element={<Form/>} path={"/new"}/>
        <Route element={<Details/>} path={"/pokemon/:id"}/>
      </Routes>
    </main>;
  }


export default Main;
