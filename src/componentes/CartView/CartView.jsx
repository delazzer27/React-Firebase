import React, {useState, useEffect, useContext} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
const CartView = () => {
    const {carrito, quitarProductoCarrito, totalProd } = useContext(CarritoContext);

    return (
        <div>
             carrito.lenght !==0 ? (
                <div>
                    {carrito.map((element)=> (
                    <div className='cart-item-container'>
                        <span>{element.productos.name}</span>
                        <span>{element.productos.precio}</span>
                        <img src={element.productos.img}></img>
                        <span>cantidad:{element.productos.count} </span>
                        <button onClick={()=>quitarProductoCarrito(element.productos.id)}>Eliminar</button>
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
                <Link to="/categoria">
                    <button className='button'>Seguir comprando</button>
                </Link>
            </div>
        </div>
             )
        </div>
    );
}

export default CartView;
