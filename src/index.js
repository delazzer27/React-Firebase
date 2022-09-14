import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componentes/App.jsx';
import {CarritoProvider} from './componentes/context/CarritoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);
