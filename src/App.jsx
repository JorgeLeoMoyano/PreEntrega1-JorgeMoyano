import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import CartWidget from './componentes/CartWidget';

function App() {

 const alerta = () => {
  console.log("en el carro hay 8 productos");
 }
 
  return (
    <div className="App">
      <CartWidget action = {alerta}/>
      <NavBar/>
      <ItemListContainer greeting='Pagina en proceso...'/>
    </div>
  );
}

export default App;
