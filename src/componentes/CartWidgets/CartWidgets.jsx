import React, {useContext} from 'react';
import { BiCart } from 'react-icons/bi';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidgets = () => {
    const {carrito, getCount} = useContext(CarritoContext);
    return (
    carrito.length ==! 0 ? (
        <div>
            <Link to="/cart">
                <div className='cart-item-container'>
                    <BiCart className='cart'/>
                    <span className='cantidad'>{getCount()}</span>
                </div>
            </Link>
        </div>        
    ) : (
        <></>
    ) );
}

export default CartWidgets;
