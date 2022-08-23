
import './App.css';
import CartWidgets from './CartWidgets/CartWidgets';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
function App() {
  return (
    <div className="App">
        <h1>Proyecto de React</h1>
        <NavBar/>
        <ItemListContainer saludo='Bienvenido a mi e-commerce'/>
    </div>
  );
}

export default App;
