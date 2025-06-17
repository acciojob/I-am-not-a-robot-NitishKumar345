//your code here
 const imageSources = [
      'images/img1.jpg',
      'images/img2.jpg',
      'images/img3.jpg',
      'images/img4.jpg',
      'images/img5.jpg'
    ];

    const tilesContainer = document.getElementById('tiles');
    const resetBtn = document.getElementById('reset');
    const verifyBtn = document.getElementById('verify');
    const message = document.getElementById('para');

    let selectedImages = [];

    function shuffleAndDisplayImages() {
      let images = [...imageSources];
      const duplicate = images[Math.floor(Math.random() * images.length)];
      images.push(duplicate);

      images = images.sort(() => 0.5 - Math.random());

      tilesContainer.innerHTML = '';
      images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.setAttribute('data-src', src);
        img.addEventListener('click', () => handleImageClick(img));
        tilesContainer.appendChild(img);
      });
    }

    function handleImageClick(img) {
      if (selectedImages.includes(img)) return;

      if (selectedImages.length < 2) {
        img.classList.add('selected');
        selectedImages.push(img);

        resetBtn.style.display = 'inline-block';

        if (selectedImages.length === 2) {
          verifyBtn.style.display = 'inline-block';
        }
      }
    }

    resetBtn.onclick = () => {
      selectedImages.forEach(img => img.classList.remove('selected'));
      selectedImages = [];
      verifyBtn.style.display = 'none';
      resetBtn.style.display = 'none';
      message.textContent = '';
    };

    verifyBtn.onclick = () => {
      verifyBtn.style.display = 'none';
      const src1 = selectedImages[0].getAttribute('data-src');
      const src2 = selectedImages[1].getAttribute('data-src');

      if (src1 === src2) {
        message.textContent = "You are a human. Congratulations!";
      } else {
        message.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
      }
    };

    shuffleAndDisplayImages();