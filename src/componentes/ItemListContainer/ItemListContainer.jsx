import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import productosData from '../data/productosData';
import ItemList from '../ItemList/ItemList'



const ItemListContainer = () => {

    const getProduct = () => new Promise((resolve, reject) => {
        if(categoria){
            setTimeout(()=>resolve(productosData.filter(productos => productos.category === categoria)), 2000)
        } else {
            setTimeout(()=>resolve(productosData), 2000)
        }
    })

    const [productos, setProductos] = useState ([]);
    const {categoria} = useParams()

    useEffect(() => {
        getProduct ()
        .then (response => setProductos(response))
        .catch (error =>{
            console.error (error)
        })
        return () => {
            setProductos()
        }
    }, [categoria]);
      
    
    
    return (
        <>
         {
            productos ? <ItemList catalogue={productos}/> : <h1>Cargando...</h1>
        } 
        </>
    );
}

export default ItemListContainer;
