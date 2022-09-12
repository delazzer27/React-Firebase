import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from './context/CarritoContext';

const Counter =({stock, productos}) => {
    const {carrito, agregarProductoCarrito} =  useCarritoContext();
    const [count, setCount] = useState(1)
    function add () {
        if (count < stock) {
            setCount (count + 1)
        }

    }
    function substract () {
        if (count > 1) {
            setCount (count - 1)
        }
        
    }
    function reset () {
        setCount (1)
    }

    function onAdd (productos, count)  {
        const productoCarrito = {id: productos.id, count: count}
        agregarProductoCarrito (productoCarrito)
        console.log(carrito);
    }

  return (
    <div className='card'>
        <p> Stock: {stock} </p>
        <p> Cantidad: {count}</p>
        <div>
            <button className='btn btn-dark' onClick={add}> + </button>
            <button className='btn btn-light' onClick={reset}> Reset </button>
            <button className='btn btn-dark' onClick={substract}> - </button>
        </div>
        <div>
        <Link to="/cart" className="nav-link">
            <button className='btn' onClick={()=> onAdd(productos, count)}> Comprar </button>
            </Link>
        </div>
    </div>
  )
}

export default Counter