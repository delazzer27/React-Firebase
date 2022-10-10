import { collection, getDocs, query, where } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import db from '../../services/firebase';
import ItemList from '../ItemList/ItemList'



const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    const {categoria} = useParams()
    const [load, setLoad] = useState(true)
      
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
