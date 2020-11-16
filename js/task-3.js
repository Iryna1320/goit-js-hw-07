const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('#gallery');

const createGalleryList = count => {
  const galleryItem = document.createElement('li');
  const galleryElem = document.createElement('img');
  galleryElem.setAttribute('src', count.url);
  galleryElem.setAttribute('alt', count.alt);
  galleryElem.setAttribute('width', 300);
  galleryElem.setAttribute('height', 150);
  galleryItem.append(galleryElem);
  return galleryItem;
};

const galleryItem = images.map(elem => createGalleryList(elem));
console.log(createGalleryList(...images));
galleryList.append(...galleryItem);
