import {useState} from 'react';
import { Link } from 'react-router-dom';


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
            <Link to="/cart">
            <button className='btn' onClick={()=> onAdd(productos, count)} > Comprar </button>
            </Link>
        </div>

    </div>
  )
}

export default Counter