import House from "./house.js";
import "./assets/styles/style.css";
import "./assets/styles/style1.css";
import makitaImage from "./assets/images/makita.png";
import catImage from "./assets/images/cat.jpg"
const house = new House(9, 6, 2);

house.getInfo();


const img = document.createElement("img");
img.src = makitaImage;
document.body.appendChild(img);

const img2 = document.createElement("img");
img2.src = catImage;
document.body.appendChild(img2);