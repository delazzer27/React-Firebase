import React from 'react';

const Item = ({productos}) => {
    return (
            <div className="card text-white bg-primary m-3" style={{maxWidth: '20rem'} }>
                <div className="card-header">{productos.name}</div>
                <div className="card-body">
                <p className="card-title">Precio: ${productos.precio}</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
    );
}

export default Item;
