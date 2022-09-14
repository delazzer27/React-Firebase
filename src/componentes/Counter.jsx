import {useState} from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart/Cart';

const Counter =({stock, productos, onAdd}) => {
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
                <button className='btn' onClick={()=> onAdd(productos, count)} > Comprar </button>
                {
                    onAdd ? <Cart productos={productos} count={count}></Cart> : <h1>Error</h1>
                }

        </div>

    </div>
  )
}

export default Counter