import React from 'react';
import ImageGallery from './ImageGallery';


const NewComponent = () => {
    return (
        <div>
            <h2>Nuevo Componente</h2>
            <p>Este es un nuevo componente.</p>
          
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
            <ImageGallery />
        </div>
    );
};

export default MyPage;