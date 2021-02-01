const ages = [ 12,14,16,13,17];
const ages2 = [ 15,16,21];
const ages3 = [ 15,16,21];
const allAges=[...ages,...ages2, 5, ...ages3];
console.log(allAges);

const takaPaisha= [650,450,230];
const maximum = Math.max(...takaPaisha);
console.log(maximum);