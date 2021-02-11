const ages = [12,14,13,12.5,15];
const ages2 = [23,22,21,24,25];
const ages3 = [33,32,31,34,35];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 99,...ages3];
//console.log(allAges2);

const takaPoisha = [650,450,750,8775];
console.log(Math.max(...takaPoisha));