import { doc, getDoc } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import productosData from '../data/productosData';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../services/firebase';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [productos, setProductos] = useState()
    const [load, setLoad] = useState(true)
    // const getProduct = () => new Promise((resolve, reject) => {
    //     setTimeout(()=>resolve (productosData.find(productos => productos.id === Number(id))), 2000)
    // })
    // useEffect(() => {
    //     getProduct()
    // .then(response => setProductos(response))
    // }, [id]);

    const getSelected = async(idItem) => {
        try {
            const document = doc(db,"items", idItem)
            const response = await getDoc(document) 
            const result = {id: response.id, ...response.data()}
            setProductos(result)
            setLoad(false)
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(() => {
        getSelected(id)
    }, [id]);
    return (
        <>
          { load ? <h1>Cargando...</h1> : <ItemDetail productos={productos}/> }
        </>
      
    );
}

export default ItemDetailContainer;
