import React from 'react';
import '../hojas-de-estilo/Testimonio.css'; // Importamos el archivo CSS que contiene los estilos para este componente

/**
 * Componente de testimonio que muestra una foto, nombre, cargo y testimonio de un estudiante.
 * @param {Object} props - Propiedades que se pasan al componente.
 * @param {string} props.imagen - Nombre de la imagen del estudiante.
 * @param {string} props.nombre - Nombre del estudiante.
 * @param {string} props.pais - País donde estudió.
 * @param {string} props.cargo - Cargo del estudiante en su empresa.
 * @param {string} props.empresa - Nombre de la empresa donde trabajó el estudiante.
 * @param {string} props.testimonio - Testimonio del estudiante sobre freeCodeCamp.
 * @returns {JSX.Element} - Componente de testimonio.
 */
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
