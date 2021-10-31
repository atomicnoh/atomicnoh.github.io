const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");
bgImg.classList.add("imgSize")

bgImg.src = `img/${randomImg}`;
document.body.appendChild(bgImg);




// const images = ["1.jpg", "2.jpg", "3.jpg"];

// const ranImage = images[Math.floor(Math.random() * images.length)];
// const bgimg = document.createElement("img");
// bgimg.classList.add("universe");

// bgimg.src = `img/${ranImage}`;
// document.body.appendChild(bgimg) ;