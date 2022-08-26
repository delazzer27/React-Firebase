import {useState} from 'react'

const Counter =({stock, onAdd}) => {
    const [count, setCount] = useState(0)
    function add () {
        if (count < stock) {
            setCount (count + 1)
        }

    }
    function substract () {
        if (count > 0) {
            setCount (count - 1)
        }
        
    }
    function reset () {
        setCount (0)
    }

  return (
    <div className='card'>
        <h1>Counter</h1>
        <p> Stock: {stock} </p>
        <p> Cantidad: {count}</p>
        <div>
            <button className='btn btn-dark' onClick={add}> + </button>
            <button className='btn btn-light' onClick={reset}> Reset </button>
            <button className='btn btn-dark' onClick={substract}> - </button>
        </div>
        <div>
            <button className='btn' onClick={()=> onAdd(count)}> Confirmar </button>
        </div>
    </div>
  )
}

export default Counter