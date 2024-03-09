const newDiv = document.createElement('div');

        
for (let i = 1; i <= 6; i++) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Este es el párrafo ' + i + ' dentro del div dinámico';
    newDiv.appendChild(newParagraph);
}

document.body.appendChild(newDiv);