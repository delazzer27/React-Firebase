import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../../services/firebase';
import { CarritoContext } from '../context/CarritoContext';

const Checkout = () => {
    const {carrito, totalProd, limpiarCarrito} = useContext(CarritoContext);
    const [orderId, setOrderId] = useState();
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Telefono: ""
    });

    const {Nombre, Email, Telefono} = buyer

    const navigate = useNavigate()

    const generateOrder = async(data) => {
        try {
            const col = collection (db, "Orders")
            const order = await addDoc(col, data)
            console.log("OrderNro:",order);
            setOrderId(order.id)
            limpiarCarrito()
        } catch (error) {
            console.log (error)
        }
    }

     const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
     }

     const handleSubmit = (e) => {
        e.preventDefault()
        const items = carrito.map(e => {return{id: e.id, title: e.name, price: e.precio, cant: e.count}})
        const dia = new Date()
        const total = totalProd()
        const data = {buyer, items, dia, total}
        console.log("data", data);
        generateOrder(data)
     }

     const handleClear = () => {
        limpiarCarrito()
        navigate("/cart")

     }

    return (
        <div>
            <h1>
                Finalizar compra 
            </h1>
            <hr />
            {!orderId?
            (<div>
<h4> Completar datos: </h4>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name = "Nombre"
                placeholder='Nombre'
                value={Nombre}
                onChange={handleInputChange}
                />
                <br /> <br />
                <input
                type="mail"
                name = "Email"
                placeholder='Email'
                value={Email}
                onChange={handleInputChange}
                />
                <br /> <br />
                <input
                type="text"
                name = "Telefono"
                placeholder='Telefono'
                value={Telefono}
                onChange={handleInputChange}
                />

                <br /> <br />
                <input
                type="submit"
                placeholder='Finalizar compra'
                className='btn btn-success'
                />

            </form>
            </div>)
            :
            <h4>Su orden de compra es : {orderId}</h4>}
            <button className='btn btn-danger' onClick={handleClear}>Cancelar compra</button>
        </div>
    );
}

export default Checkout;
