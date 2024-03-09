const baseUrl = 'https://api.nationalize.io?name=';

const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const resultDiv = document.getElementById('result');

submitButton.addEventListener('click', () => {
    const name = nameInput.value;

    if (name.trim() !== '') {
        fetch(`${baseUrl}${name}`)
            .then(response => response.json()) 
            .then(data => {
                resultDiv.textContent = JSON.stringify(data);
            })
            .catch(error => {
                resultDiv.textContent = 'Error al consultar la API';
                console.error('Error fetching data:', error);
            });
    } else {
        resultDiv.textContent = 'Por favor ingresa un nombre antes de consultar';
    }
});