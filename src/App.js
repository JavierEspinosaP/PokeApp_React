import React, { useState } from 'react';
import './App.css';
import CardList from './components/Main/CardList'
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import { pokeContext } from './context/pokeContext';
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const [data, setData] = useState([])

  const pokeData = {
    data,
    setData
  }
  return (
    <BrowserRouter>
    <pokeContext.Provider value={pokeData}>
    <Header/>
    <Main/>      
    </pokeContext.Provider> 
    <Footer/>       
    </BrowserRouter>

  );
}

export default App;
