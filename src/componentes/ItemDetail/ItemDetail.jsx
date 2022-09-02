import React from 'react';
import Counter from '../Counter';


const ItemDetail = ({productos}) => {
    function onAdd (count)  {
        console.log(`Se han adquirido ${count} productos`);
    }

    return (
        <div style={{display: "flex"}}>
                <div className="card mb-3">
                    <h3 className="card-header">{productos.name}</h3>
                    <div className="card-body">
                    <h5 className="card-title">{productos.precio}</h5>
                    </div>
                    <img src={productos.img} alt="foto de producto" className='imgDetail'/>
                    <div className="card-body">
                    <p className="card-text">{productos.descripcion}</p>
                    </div>
                </div>
                <div>
                <Counter stock = {productos.stock} onAdd = {onAdd}/>
                </div>
        </div>
    );
}

export default ItemDetail;

