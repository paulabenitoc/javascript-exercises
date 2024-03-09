const newDiv = document.createElement('div');

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Esto es un div que contiene un párrafo';

newDiv.appendChild(newParagraph);

document.body.appendChild(newDiv);