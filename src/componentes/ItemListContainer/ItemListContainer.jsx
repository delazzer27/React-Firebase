import React, {useState, useEffect} from 'react';
import productosData from '../data/productosData';
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    useEffect(() => {
        function consultarPromesa (confirmacion) {
            return new Promise((resolve, reject) => {
                if (confirmacion) {
                    resolve (productosData)
                } else {
                    reject('Acceso denegado')
                }
            })
        }
        consultarPromesa (true)
        .then ((response) => setProductos(response))
        .catch (error =>{
            console.error (error)
        })
    }, []);
    
    return (
        <div>
            <ItemList catalogue={productos}/>

        </div>
    );
}

export default ItemListContainer;
