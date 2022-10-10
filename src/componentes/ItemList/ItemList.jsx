import React from 'react'
import Item from '../Item/Item';


const ItemList =({catalogue}) =>{

  return (
    <div className='row'>
      {catalogue.map((i) => (<Item item={i} name={i.name} key={i.id} id={i.id} image={i.img} price={i.precio}/>))}
    </div>
  )
}

export default ItemList;