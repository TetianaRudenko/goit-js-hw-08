// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const gallaryMarkup = createGallaryMarkup(galleryItems); 

galleryContainer.insertAdjacentHTML('beforeend', gallaryMarkup);

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original,description }) => {
      return `
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    `;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionSelector: 'img[alt]',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
}); 

console.log(galleryItems);
