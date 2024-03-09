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
                const paragraphs = data.country.map(country => {
                const probability = (country.probability * 100).toFixed(2);
                    return `<p>El nombre ${name} tiene un ${probability}% de ser de ${country.country_id}</p>`;
                });
                resultDiv.innerHTML = paragraphs.join('');
            })
            .catch(error => {
                resultDiv.textContent = 'Error al consultar la API';
                console.error('Error fetching data:', error);
            });
    } else {
        resultDiv.textContent = 'Por favor ingresa un nombre antes de consultar';
    }
});