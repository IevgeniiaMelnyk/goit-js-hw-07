import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

// galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description,
    }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    }).join('');
};

const gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox');

gallery.options.captionsData = 'alt';
gallery.options.captionDelay = 250;

