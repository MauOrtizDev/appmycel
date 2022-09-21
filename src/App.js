
import './App.css';
import React   from 'react';
import Navbar from './Components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
// import "jquery/dist/jquery.js"
// import "@popperjs/core"; 
import "bootstrap";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
// import Button from './Components/Button/Button';


function App() {
  return (
        <div>
  <Navbar/>
  <ItemListContainer greetings={"¡Bienvenido! Aquí irán los productos"}/>
  {/* <Button label={'Prueba'} tipo={'primary'} accion={() => {alert('Epa')}}/> */}
  </div> 
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
