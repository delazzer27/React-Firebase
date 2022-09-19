import React, {createContext, useState, useEffect} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(carrito);
    }, []);
    const agregarProductoCarrito = (producto) => {
        const auxCarrito = carrito
        if (isInCarrito(producto.id)) {
            let indexProdcuto = carrito.findIndex(prod => prod.id === producto.id);
            auxCarrito[indexProdcuto].count = auxCarrito[indexProdcuto].count + producto.count;
            setCarrito(auxCarrito)
            totalProd(auxCarrito)
        } else {
            // const newCarrito = [...carrito, productos]
            auxCarrito.push(producto)
            setCarrito(auxCarrito)
            totalProd(auxCarrito)
        }
    }

    const quitarProductoCarrito = (id) => {
        const newCarrito = [...carrito].filter (element=> element.id !== id)
        setCarrito(newCarrito)
    }

    const limpiarCarrito = () => {
        setCarrito([])
    }
    const isInCarrito = (id) => {
        return carrito.some(prod=> prod.id === id)
    }

    const totalProd = () =>{
        let total = 0;
        carrito.forEach((element)=> {
            total +=(element.count*element.precio)
        })
        return total;
    }

    const getCount = () => {
        let cantidad = 0;
        carrito.forEach((element) => {
            cantidad += element.count;
        });
        return cantidad
    }

    const context = {
        carrito,
        agregarProductoCarrito,
        quitarProductoCarrito,
        limpiarCarrito,
        totalProd,
        getCount
    }
    return (
        <>
            <CarritoContext.Provider value={context}>
                    {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export { CarritoContext, CarritoProvider};
