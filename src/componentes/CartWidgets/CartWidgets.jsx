import React, {useContext} from 'react';
import { BiCart } from 'react-icons/bi';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidgets = () => {
    const {carrito, getCount} = useContext(CarritoContext);
    return (
        <>
            <Link to="/cart">
                <BiCart className='cart'/>
                <span>{getCount}</span>
            </Link>
        </>
  
        
    );
}

export default CartWidgets;
