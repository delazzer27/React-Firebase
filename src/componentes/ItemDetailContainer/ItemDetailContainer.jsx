import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import productosData from '../data/productosData';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [productos, setProductos] = useState({})
    const getProduct = () => new Promise((resolve, reject) => {
        resolve (productosData.find(productos => productos.id === Number(id)))
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
