import logo from './logo.svg';
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';

function App() {

  return (
   
   <>
    <Navbar/>
    <ItemListContainer greeting="Bienvenido a mi Tienda" />
   </>

  
  );
}

export default App;
