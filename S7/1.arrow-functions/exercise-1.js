const sumar = (a = 10, b = 5) => {
    console.log("La suma es:", a + b);
};

console.log("Ejecutar la función sin pasar ningún parámetro:");
sumar();

console.log("Ejecutar la función pasando un solo parámetro:");
sumar(7);

console.log("Ejecutar la función pasando dos parámetros:");
sumar(3, 4);