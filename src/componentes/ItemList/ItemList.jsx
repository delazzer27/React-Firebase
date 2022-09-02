import React from 'react'
import Item from '../Item/Item';

const ItemList =({catalogue}) =>{
  return (
    <div className='row'>
        {catalogue.map((productos, indice)=> (
            <Item productos={productos} key={indice}/>
        ))}
    </div>
  )
}

export default ItemList;