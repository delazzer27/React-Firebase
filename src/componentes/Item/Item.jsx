import React from 'react';

const Item = ({productos}) => {
    return (
            <div className="card text-white bg-primary m-3" style={{maxWidth: '20rem'} }>
                <div className="card-header">{productos.name}</div>
                <div className="card-body">
                <p className="card-title">Precio: ${productos.precio}</p>
                <img src={productos.img} alt="foto producto" className='imgPequenia'/>
                <button type="button" class="btn btn-outline-success">Ver más</button>
                </div>
            </div>
    );
}

export default Item;
