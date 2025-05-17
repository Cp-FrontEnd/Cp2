const imagens = [
  "src/assets/imgs/carroe3.webp",
  "src/assets/imgs/carroe4.jpg",
  "src/assets/imgs/carroeletrico.jpeg"
];

let indice = 0;

function trocarFundo() {
  document.querySelector(".hero-bg").style.backgroundImage = `url('${imagens[indice]}')`;
  indice = (indice + 1) % imagens.length;
}

trocarFundo();
setInterval(trocarFundo, 5000);