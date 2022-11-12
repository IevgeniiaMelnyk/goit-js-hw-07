import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description,
    }) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `
    }).join('');
};

const modal = basicLightbox.create(`
    <img class="gallery__image--modal" src="" alt="" />`);

function onGalleryItemClick(evt) {

    const isGalleryImageEl = evt.target.classList.contains('gallery__image');
    const clickImg = evt.target.dataset.source;

  if (!isGalleryImageEl) {
    return;
  }
    evt.preventDefault();
    const src = evt.target.getAttribute('data-source');
    const alt = evt.target.getAttribute('alt')
    
    onOpenModal(src, alt);
};

function onOpenModal(src, alt) {
    window.addEventListener('keydown', onEscKeyPress);
    const modalImg = modal.element().querySelector('.gallery__image--modal');
    modalImg.setAttribute('src', src);
    modalImg.setAttribute('alt', alt);
    modal.show()
};

function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    modal.close()
};

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
};

