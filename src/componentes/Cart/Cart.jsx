import React from 'react';

const Cart = ({productos, count}) => {
    return (

        <>
        <p>Se adquirio {count} productos de {productos.name}</p>
        </>
    );
}

export default Cart;
