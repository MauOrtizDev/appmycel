import './App.css';
import React, { createContext } from 'react';
import Navbar from './Components/Navbar/NavBar';
import "bootstrap";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './Context/CartContext' 
// import MercadoLibre from './Components/MercadoLibre/MercadoLibre';
// import Button from './Components/Button/Button';


function App() {


  return (
    <div>

      {/* <MercadoLibre/> */}
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greetings={"Nuestros productos"} />} />
            <Route path='/marca/:marcaId' element={<ItemListContainer greetings={"Nuestros productos"} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h2>404 No Encontrado</h2>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      {/* <Button label={'Prueba'} tipo={'primary'} accion={() => {alert('Epa')}}/> */}

    </div>
  );
}

export default App;
