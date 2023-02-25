// Criando paleta de cores

const colorPallete = document.getElementById('color-palette');

for (let index = 1; index <= 4; index += 1) {
  const divCores = document.createElement('div');
  divCores.className = 'color';
  colorPallete.appendChild(divCores);
}
document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'green';

document.getElementsByClassName('color')[0].id = 'black';
document.getElementsByClassName('color')[1].id = 'violet';
document.getElementsByClassName('color')[2].id = 'blue';
document.getElementsByClassName('color')[3].id = 'green';

// cria quadros a se pintar

function criaQuadro(linha) {
  const quadroAPintar = document.getElementById('pixel-board');

  for (let i = 0; i < linha; i += 1) {
    const lines = document.createElement('div');
    lines.className = 'lines';
    quadroAPintar.appendChild(lines);

    for (let j = 0; j < linha; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'rgb(255,255,255)';
      lines.appendChild(pixel);
    }
  }
}
// criaQuadro(5);
function resize() {
  const inputText = document.getElementById('input-text');
  let inputValue = inputText.value;

  if (inputText.value < 5) {
    alert('Board inválido!');
  }
  if (inputValue < 5 && inputValue > 0) {
    inputText.value = 5;
    inputValue = 5;
  } else if (inputValue > 50) {
    inputText.value = 50;
    inputValue = 50;
  }

  criaQuadro(inputValue);
  pint();
}
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', resize);

const clearBtn = document.getElementById('clear-btn');
const pixels = document.getElementsByClassName('pixel');

function whitening() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}
clearBtn.addEventListener('click', whitening);
// Defina a cor preta como cor inicial da paleta de cores

const selector = document.getElementById('black');
selector.classList.add('selected');

// Selecione uma cor na paleta de cores e preencha os pixels no quadro
function mudaSelect() {
  const selecionaCorNaPaleta = document.querySelectorAll('.color');

  for (let index = 0; index < selecionaCorNaPaleta.length; index += 1) {
    selecionaCorNaPaleta[index].addEventListener('click', (event) => {
      const capturaSelect = document.querySelector('.selected');
      capturaSelect.classList.remove('selected');
      const eventTarget = event.target;
      eventTarget.classList.add('selected');
    });
  }
}
mudaSelect();

// Preencha um pixel do quadro com a cor selecionada na paleta de cores
function pint() {
  const selecionaPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < selecionaPixels.length; index += 1) {
    selecionaPixels[index].addEventListener('click', (event) => {
      const element = document.querySelector('.selected');
      const cssObj = window.getComputedStyle(element);
      const bgColor = cssObj.getPropertyValue('background-color');
      const eventTarget = event.target;
      eventTarget.style.backgroundColor = bgColor;
    });
  }
}
