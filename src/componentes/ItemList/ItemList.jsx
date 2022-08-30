import React from 'react'

const ItemList =({catalogue}) =>{

  return (
    <div className='row' >
        {catalogue.map((productos, indice)=> (
                    <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem', margin: '3px', padding:'3px'} 
                } key={indice}>
                    <div className="card-header">{productos.name}</div>
                    <div className="card-body">
                    <p className="card-title">Precio: ${productos.precio}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        ))}

    </div>
  )
}

export default ItemList;