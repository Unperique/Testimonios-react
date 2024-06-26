// Importamos React y ReactDOM de la biblioteca de React
import React from 'react';

// Importamos ReactDOM para renderizar el componente de React en el DOM
import ReactDOM from 'react-dom';

// Importamos un archivo CSS llamado index.css que contiene estilos para el proyecto
import './index.css';

// Importamos el componente principal de la aplicación desde el archivo App.js
import App from './App';

// Renderizamos el componente principal de la aplicación en el elemento del DOM con el id 'root'
// Utilizamos ReactDOM.render para hacer esto y React.StrictMode para activar un modo de desarrollo más estricto
// ReactDOM.render es una función que toma dos parámetros: el componente a renderizar y el elemento del DOM donde se va a renderizar
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

