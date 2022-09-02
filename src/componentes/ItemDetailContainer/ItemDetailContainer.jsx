import React, {useState, useEffect} from 'react';
import productosData from '../data/productosData';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const getProduct = () => new Promise((resolve, reject) => {
        resolve (productosData.find(productos => productos.id === 4))
    })
    useEffect(() => {
     getProduct()
     .then(response => setProductos(response))
    }, []);
    return (
        <div>
            <ItemDetail productos={productos}/>
        </div>
    );
}

export default ItemDetailContainer;
