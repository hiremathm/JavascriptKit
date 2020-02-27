let n1 = 10, n2 = 20
function add(n1, n2){ // shadow variables
    n1 = 100
    n2 = 200

    const result = n1 + n2
    return result;
}
console.log(add(n1, n2))
console.log(n1, n2)
