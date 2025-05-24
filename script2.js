const sobremim = document.getElementById('sobremim');
const esportes = document.getElementById('esportes');
const resolucao = document.getElementById('resolucao');
const imgOnze = document.getElementById('foto11');
const body = document.getElementById('body')
// setInterval(() => {
//   resolucao.innerText = window.innerWidth + " x " + window.innerHeight;
// }, 1);

const fundo = document.querySelector('.fundo')
const pessoa = document.querySelector('.pessoa')

function transicaoImagem(){
  pessoa.style.transition = 	"all 0.7s ease";
  fundo.style.transition = 	"all 0.7s ease";
  fundo.style.filter = 'grayscale(100%) blur(2px)';
  pessoa.style.transform = 'scale(1.2)'
  fundo.style.borderRadius = "90px";
}
function resetarImagem(){
  pessoa.style.transition = 	"all 0.7s ease";
  fundo.style.transition = 	"all 0.7s ease";
  fundo.style.filter = 'grayscale(0%) blur(0px)';
  pessoa.style.transform = 'scale(1.00)'
  fundo.style.borderRadius = "0px";
}
pessoa.addEventListener('mouseenter', transicaoImagem)
pessoa.addEventListener('click', transicaoImagem)


pessoa.addEventListener('mouseleave', resetarImagem)
pessoa.addEventListener('touchend', resetarImagem)

