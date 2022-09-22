import React, {useState, useEffect, useContext} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
const CartView = () => {
    const {carrito, quitarProductoCarrito, totalProd } = useContext(CarritoContext);

    return (
        
            carrito.length !== 0 ? (
                <div>
                    {carrito.map((element)=> (
                    <div className='cart-item-container'>
                        <span>{element.name}</span>
                        <span> ${element.precio}</span>
                        <img className="imgPequenia" src= {element.img}></img>
                        <span>cantidad:{element.count} </span>
                        <button onClick={()=>quitarProductoCarrito(element.id)}>Eliminar</button>
                    </div>
                     ))}
                <div>
                    <h4>Precio Total: {totalProd()} </h4>
                    <button>Confirmar compra</button>
                </div>
                </div>
             ) 
             : (
                <div>
                    <div className='cart-container'>
                        <h1>No hay productos en el carrito</h1>
                            <Link to="/">
                             <button className='button'>Seguir comprando</button>
                            </Link>
                    </div>
                </div>
             )

    );
}

export default CartView;
