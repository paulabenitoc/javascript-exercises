const userAnwsers = [];

function confirmExample(description) {
  return confirm(description);
}

function promptExample(description) {
  return prompt(description);
}

function father(description, callback) {
  const result = callback(description);
  userAnwsers.push(result);
}

father('¿Está seguro?', confirmExample);
father('Por favor, introduzca su nombre:', promptExample);
father('¿Desea continuar ? ', confirmExample);

console.log(userAnwsers);