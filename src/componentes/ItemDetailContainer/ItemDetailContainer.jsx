import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import productosData from '../data/productosData';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [productos, setProductos] = useState()
    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(()=>resolve (productosData.find(productos => productos.id === Number(id))), 2000)
    })
    useEffect(() => {
        getProduct()
    .then(response => setProductos(response))
    }, [id]);
    return (
        <>
          {
            productos ? <ItemDetail productos={productos}/> : <h1>Cargando...</h1>
        }
        </>
      
    );
}

export default ItemDetailContainer;
