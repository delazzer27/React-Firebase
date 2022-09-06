import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Proyecto de React</h1>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </div>
    </BrowserRouter>


  );
}

export default App;
