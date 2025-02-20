import { Photo } from './types';

const photoGallery: Photo[] = [
    {
        id: 1,
        url: 'https://example.com/photo1.jpg',
        title: 'Photo 1',
        description: 'Description of Photo 1'
    },
    {
        id: 2,
        url: 'https://example.com/photo2.jpg',
        title: 'Photo 2',
        description: 'Description of Photo 2'
    },
    {
        id: 3,
        url: 'https://example.com/photo3.jpg',
        title: 'Photo 3',
        description: 'Description of Photo 3'
    }
];

function initializeGallery() {
    const galleryContainer = document.getElementById('gallery');
    if (galleryContainer) {
        photoGallery.forEach(photo => {
            const photoElement = document.createElement('div');
            photoElement.className = 'photo-item';
            photoElement.innerHTML = `
                <img src="${photo.url}" alt="${photo.title}" />
                <h3>${photo.title}</h3>
                <p>${photo.description}</p>
            `;
            galleryContainer.appendChild(photoElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeGallery);