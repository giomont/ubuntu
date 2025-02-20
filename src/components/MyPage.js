import React from 'react';
import exampleImage from 'https://github.com/giomont/ubuntu/blob/main/src/assets/images/exampleImage.JPG'; // Asegúrate de que la ruta sea correcta

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