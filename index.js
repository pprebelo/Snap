const btn = document.getElementById('btn');

const image = document.getElementById('thumbnail-img');

const refreshEveryMS = 20000;

setInterval(() => {
  if (!image.src.includes('?')) {
    image.src = `${image.src}?${Date.now()}`;
  } else {
    image.src =
      image.src.slice(0, image.src.indexOf('?') + 1) +
      Date.now();
  }

  console.log('image refreshed');

  console.log(image.src);
}, refreshEveryMS);