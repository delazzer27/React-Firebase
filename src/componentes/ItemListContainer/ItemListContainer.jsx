import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import productosData from '../data/productosData';
import ItemList from '../ItemList/ItemList'



const ItemListContainer = () => {

    
    const [productos, setProductos] = useState ([]);
    const {categoria} = useParams()

    const getProduct = () => new Promise((resolve, reject) => {
        if(categoria){
            setTimeout(()=>resolve(productosData.filter(productos => productos.category === categoria)), 2000)
        } else {
            setTimeout(()=>resolve(productosData), 2000)
        }
        
    })

    useEffect(() => {
        getProduct ()
        .then (response => setProductos(response))
        .catch (error =>{
            console.error (error)
        })
    }, [categoria]);
      
    
    
    return (
        <div>
            <ItemList catalogue={productos}/>

        </div>
    );
}

export default ItemListContainer;
