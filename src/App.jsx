import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer';
import Saludo from './componentes/Saludo';

function App() {

  const boton = <button>Boton</button> ;
  const nombre = "rodolfo";
  const estilos = 
  {
    color :'red',
    backgroundColor: 'yellow',
    padding: 20
  }
  const mensaje =() => {
   console.log(1);
  }



  return (
    <div className="App">
      <h1>Hola papus { nombre } </h1>
    
      <strong style = {estilos} >este es un mensaje</ strong>
      {boton}
      <Saludo name = 'Leo' age = '22' action = {mensaje}  />
      <Saludo name = 'pipo' age = '55' action = {mensaje}/>
      <Saludo name = 'roberto' age = '35' action = {mensaje}/>
      <li>suculentas</li>
      <li>suculentas</li>
      <li>suculentas</li>
      <li>suculentas</li>
      <li>suculentas</li>
     <Footer/>
     
    </div>
  );
}

export default App;
