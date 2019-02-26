import images from '../data/images.js';
import makeImagesTemplate from './makeImageTemplate.js';

const imagesList = document.getElementById('images-list');
images.forEach(function(image) {
    const dom = makeImagesTemplate(image);
    imagesList.appendChild(dom);
});