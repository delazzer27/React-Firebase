import { collection, getDocs, query, where } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import db from '../../services/firebase';
// import productosData from '../data/productosData';
import ItemList from '../ItemList/ItemList'



const ItemListContainer = () => {

    // const getProduct = () => new Promise((resolve, reject) => {
    //     if(categoria){
    //         setTimeout(()=>resolve(productosData.filter(productos => productos.category === categoria)), 2000)
    //     } else {
    //         setTimeout(()=>resolve(productosData), 2000)
    //     }
    // })

    const [productos, setProductos] = useState ([]);
    const {categoria} = useParams()
    const [load, setLoad] = useState(true)

    // useEffect(() => {
    //     getProduct ()
    //     .then (response => setProductos(response))
    //     .catch (error =>{
    //         console.error (error)
    //     })
    //     return () => {
    //         setProductos()
    //     }
    // }, [categoria]);
      
    const getData =  async(categoryID) => {
        try {
            setLoad(true)
            const document = categoryID? query(collection(db,"items"),where("category","==", categoryID))
            : collection(db,"items")
            const col = await getDocs(document)
            const result = col.docs.map((doc)=> doc = {id:doc.id,...doc.data()})
            setProductos(result)
            setLoad(false)
        } catch (error) {
            console.log(error);
        }     
    }

    // const getDataCategory =  async(categoryID) => {
    //     try {
    //         const document = query(collection(db,"items"),where("category","==", categoryID))
    //         const col = getDocs(document)
    //         console.log("col.docs", col.docs);
    //         const result = col.docs.map((doc)=> doc = {id:doc.id,...doc.data()})
    //         setProductos(result)
    //     } catch (error) {
    //         console.log(error);
    //     }     
    // }

    
    useEffect(() => {
        getData(categoria)
    }, [categoria]);
    
    
    return (
        <>
         {
            load ? <h1>Cargando...</h1> : <ItemList catalogue={productos}/> 
        } 
        </>
    );
}

export default ItemListContainer;
