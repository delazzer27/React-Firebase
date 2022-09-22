import React, { useContext}  from 'react';
import Counter from '../Counter';
import { CarritoContext } from '../context/CarritoContext';


const ItemDetail = ({productos}) => {
    const {carrito, agregarProductoCarrito} =  useContext(CarritoContext);

    function onAdd (productos, count)  {
        const productoCarrito = {...productos, count: count}
        agregarProductoCarrito(productoCarrito)
        console.log(carrito);
    } 

    return (
        <div style={{display: "flex"}}>
                <div className="card mb-3">
                    <h3 className="card-header">{productos.name}</h3>
                    <div className="card-body">
                    <h5 className="card-title">{productos.precio}</h5>
                    </div>
                    <img src={productos.img} alt="foto de producto" className='imgDetail'/>
                    <div className="card-body">
                    <p className="card-text">{productos.descripcion}</p>
                    </div>
                </div>
                <div>
                <Counter stock = {productos.stock} productos={productos} onAdd = {onAdd}/>
                </div>
        </div>
    );
}

export default ItemDetail;

