const imagens = [
  "src/assets/imgs/carrogif.gif",
  "src/assets/imgs/carroe4.jpg",
  "src/assets/imgs/carroeletrico.jpeg"
];

let indice = 0;

// Criar elemento <img> dentro da hero-bg
const imgElement = document.createElement("img");
imgElement.src = imagens[indice];
document.querySelector(".hero-bg").appendChild(imgElement);

function trocarFundo() {
  imgElement.src = imagens[indice];
  indice = (indice + 1) % imagens.length;
}

setInterval(trocarFundo, 3000);