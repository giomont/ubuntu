import React from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Agrega más rutas de imágenes aquí
];

function ImageGallery() {
  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery image ${index + 1}`} />
      ))}
    </div>
  );
}

export default ImageGallery;