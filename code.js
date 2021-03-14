const canvas1 = document.getElementById('image1');
const canvas2 = document.getElementById('image2');
const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const img = new Image();

img.crossOrigin = "Anonymous";
img.src = 'https://static.wikia.nocookie.net/anime-characters-fight/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/340?cb=20181021155144&path-prefix=ru';

img.onload = function() {
	ctx1.drawImage(img, 0, 0);
	ctx2.drawImage(img, 0, 0);

  let mapImg = ctx2.getImageData(0, 0, 350, 450);
  let data = mapImg.data;
  let factor = (259 * (30 + 255)) / (255 * (259 - 30));

  for(let i = 0; i < data.length; i+= 4){
        data[i] = factor * (data[i] - 128) + 128;
        data[i+1] = factor * (data[i+1] - 128) + 128;
        data[i+2] = factor * (data[i+2] - 128) + 128;
    }

  ctx2.putImageData(mapImg,0,0);
};


