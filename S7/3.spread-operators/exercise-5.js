const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors.slice(0, 1), ...colors.slice(2)];

console.log(colorsCopy); 