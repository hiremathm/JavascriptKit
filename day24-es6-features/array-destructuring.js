const fruits = ['mango', 'apple','watermelon','strawbery', 'chikko']

const first = fruits[0], second = fruits[1], third = fruits[2]

console.log(first, second, third)

const [a1, a2] = fruits

console.log(a1, a2)

//ES6 - array destructuring

const [, b1, b2] = fruits
console.log(b1, b2)

const [, , c1, c2] = fruits

console.log(c1, c2)

const [, d1, , d2] = fruits

console.log(d1, d2)