import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({productos}) => {
    const {id} = productos
    return (
            <div className="card text-white bg-primary m-3" style={{maxWidth: '20rem'} }>
                <div className="card-header">{productos.name}</div>
                <div className="card-body">
                <p className="card-title">Precio: ${productos.precio}</p>
                <img src={productos.img} alt="foto producto" className='imgPequenia'/>
                <Link to={`/detalles/${id}`}>
                    <button type="button" class="btn btn-outline-success">Ver más</button>
                </Link>
                </div>
            </div>
    );
}

export default Item;
