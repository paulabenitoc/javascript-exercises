const cities = [
  {isVisited: true, name: 'Tokyo'}, 
  {isVisited: false, name: 'Madagascar'},
  {isVisited: true, name: 'Amsterdam'}, 
  {isVisited: false, name: 'Seul'}
];

const modifiedNames = cities.map(city => {
  if (city.isVisited) {
    return `${city.name} (Visitado)`;
  } else {
    return city.name;
  }
});

console.log(modifiedNames);