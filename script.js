const imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
const duplicatedIndex = Math.floor(Math.random() * imageNames.length);
const images = [...imageNames, imageNames[duplicatedIndex]];

// Shuffle the array
const shuffled = images
  .map((src, index) => ({ src, id: index }))
  .sort(() => 0.5 - Math.random());

const buttonsDiv = document.getElementById('buttons');
buttonsDiv.innerHTML = '';

shuffled.forEach((imageSrc, i) => {
  const img = document.createElement('img');
  img.src = 'images/' + imageSrc.src;
  
  // Assign appropriate class for Cypress test
  img.className = 'img' + (imageNames.indexOf(imageSrc.src) + 1); // results in img1 to img5
  img.alt = 'tile';

  buttonsDiv.appendChild(img);
});