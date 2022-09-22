import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ name, image, price, id }) => {
    return (
            <div className="card text-white bg-primary m-3" style={{maxWidth: '20rem'} }>
                <div className="card-header">{name}</div>
                <div className="card-body">
                <p className="card-title">Precio: ${price}</p>
                <img src={image} alt="foto producto" className='imgPequenia'/>
                <Link to={`/detalles/${id}`}>
                    <button type="button" class="btn btn-outline-success">Ver más</button>
                </Link>
                </div>
            </div>
    );
}

export default Item;
