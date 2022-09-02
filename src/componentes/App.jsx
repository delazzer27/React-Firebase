
import './App.css';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
function App() {
  return (
    <div className="App">
        <h1>Proyecto de React</h1>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
