const sobremim = document.getElementById('sobremim');
const esportes = document.getElementById('esportes');
const resolucao = document.getElementById('resolucao');
const imgOnze = document.getElementById('foto11');
const body = document.getElementById('body')
setInterval(() => {
  resolucao.innerText = window.innerWidth + " x " + window.innerHeight;
}, 1);

sobremim.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const width = window.innerWidth;
  const percent = (mouseX / width) * 100;
  const angle = (percent * 3.6); 
  sobremim.style.background = 
    `linear-gradient(${angle}deg,rgba(79, 131, 204, 0.43),rgba(248, 249, 250, 0.46))`;
});

sobremim.addEventListener('mouseout', ()=> {
    sobremim.style.background = ` rgb(77, 130, 203)`;
})

esportes.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const width = window.innerWidth;
  const percent = (mouseX / width) * 100;
  const angle = (percent * 3.6); 
  esportes.style.background = 
    `linear-gradient(${angle}deg,rgba(79, 131, 204, 0.43),rgba(248, 249, 250, 0.46))`;
});

esportes.addEventListener('mouseout', ()=> {
    esportes.style.background = ` rgb(77, 130, 203)`;
})
 let imagemClicada = false;

imgOnze.addEventListener('click', () => {
  if (imagemClicada === false) {
    imgOnze.style.transform = 'scale(1.05)';
    imagemClicada = true;

    setTimeout(() => {
      imgOnze.style.transform = 'scale(1.00)';
      imagemClicada = false;
    }, 1000);
  }
});