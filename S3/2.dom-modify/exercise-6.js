const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulElement = document.getElementById('app-list');

apps.forEach(app => {
    const liElement = document.createElement('li');
    liElement.textContent = app;
    ulElement.appendChild(liElement);
});
