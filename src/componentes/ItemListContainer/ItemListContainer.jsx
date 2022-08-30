import React, {useState, useEffect} from 'react';
import Counter from '../Counter';
import productosData from '../data/productosData';
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
    function onAdd (count)  {
        console.log(`Se han adquirido ${count} productos`);
    }

    function consultarPromesa (confirmacion) {
        return new Promise((resolve, reject) => {
            if (confirmacion) {
                resolve (productosData)
            } else {
                reject('Acceso denegado')
            }
        })
    }
    const [productos, setProductos] = useState ([]);
    consultarPromesa (true)
    .then ((response) => setProductos(response))
    .catch (error =>{
        console.error (error)
    })

    return (
        <div>
            <Counter stock = {10} onAdd = {onAdd}/>
            <ItemList catalogue={productos}/>
        </div>
    );
}

export default ItemListContainer;
