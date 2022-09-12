import React, {createContext, useContext, useState} from 'react';
export  const CarritoContext = createContext();
export const useCarritoContext = () => useContext(CarritoContext)
const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const agregarProductoCarrito = (producto) => {
        setCarrito(carrito.push(producto))
    }

    const quitarProductoCarrito = (producto) => {
        const auxCarrito = carrito
        let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
        auxCarrito.splice(indice, 1)
        setCarrito(auxCarrito)
    }
    return (
        <>
         <CarritoContext.Provider value={{carrito, agregarProductoCarrito, quitarProductoCarrito}}>
            {children}
         </CarritoContext.Provider>
        </>
    );
}

export default CarritoProvider;
