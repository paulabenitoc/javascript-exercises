const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

const { name, itv } = car;

const [year1, year2, year3] = itv;

console.log('Name:', name);
console.log('ITV:', itv);
console.log('Year1:', year1);
console.log('Year2:', year2);
console.log('Year3:', year3);