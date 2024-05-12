// Exemplo de animação simples: mover Stitch para a direita
var stitch = document.getElementById("animacao-stitchnão");
var posicaoX = 0;

setInterval(function() {
  posicaoX += 5;
  stitch.style.backgroundPosition = posicaoX + "px 0";
}, 50); 