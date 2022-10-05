import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/NavBar';
import "bootstrap";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import MercadoLibre from './Components/MercadoLibre/MercadoLibre';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Button from './Components/Button/Button';


function App() {
  return (
    <div>
      {/* <MercadoLibre/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greetings={"Nuestros productos"}/>}/>
          <Route path='/marca/:marcaId' element={<ItemListContainer greetings={"Nuestros productos"}/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Button label={'Prueba'} tipo={'primary'} accion={() => {alert('Epa')}}/> */}

    </div>
  );
}

export default App;
