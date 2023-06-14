import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryElement = document.querySelector('ul.gallery');

const galleryItemsElements = galleryItems
  .map(
    ({ preview, original, description }) => `
        <li>
            <a class="gallery__item" href="${original}">
               <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `
  )
  .join('');

galleryElement.insertAdjacentHTML('beforeend', galleryItemsElements);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
