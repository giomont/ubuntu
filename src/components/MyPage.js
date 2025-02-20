import React from 'react';
import exampleImage from '../assets/images/Captura.jpg';

// Definición del nuevo componente
const NewComponent = () => {
    return (
        <div>
            <h2>Nuevo Componente</h2>
            <p>Este es un nuevo componente.</p>
            <img src={exampleImage} alt="Ejemplo" />
        </div>
    );
};

const MyPage = () => {
    return (
        <div>
            <h1>UBUNTU </h1>
            <p>conversa sabrosa.</p>
            <p>PRODUCTOS</p>
            {/* Inclusión del nuevo componente */}
            <NewComponent />
        </div>
    );
};

export default MyPage;